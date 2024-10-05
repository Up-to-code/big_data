"use client";
import React, { useState } from 'react';
import { Property } from '@/firebase/create';
import { deleteProperty } from '@/firebase/deleteProperty';
import { motion } from 'framer-motion';
import { Trash2, Clipboard } from "lucide-react";
import { useTheme } from 'next-themes';

function MyPro({ property }: { property: Property }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { theme } = useTheme();

  const handleDelete = async (id: string) => {
    if (id && confirm("هل أنت متأكد أنك تريد حذف هذا العقار؟")) {
      setIsDeleting(true);
      await deleteProperty(id);
      setIsDeleting(false);
      setIsDeleted(true);
    }
  };

  const handleCopy = () => {
    const propertyDetails = `
      الاسم: ${property.name}
      السعر: ${property.price}
      الموقع: ${property.location}
      اسم الاتصال: ${property.contactName}
      هاتف الاتصال: ${property.contactPhone}
      النوع: ${property.type}
      المساحة: ${property.area}
      الوصف: ${property.description}
    `;

    navigator.clipboard.writeText(propertyDetails)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => console.error('Failed to copy text:', err));
  };

  if (isDeleted) return null;

  return (
    <motion.div
      className={`border p-4 rounded-lg shadow-lg text-right ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-2">
        {property.name}
      </h1>
      <p className="text-lg mb-1">السعر: {property.price}</p>
      <p className="text-lg mb-1">الموقع: {property.location}</p>
      <p className="text-lg mb-1">اسم الاتصال: {property.contactName}</p>
      <p className="text-lg mb-1">هاتف الاتصال: {property.contactPhone}</p>
      <p className="text-lg mb-1">النوع: {property.type}</p>
      <p className="text-lg mb-1">المساحة: {property.area}</p>
      <p className="text-lg mb-1">الوصف: {property.description}</p>

      <div className="flex gap-3 mt-4 justify-end">
        {/* Delete Button */}
        <button
          className={`px-4 py-2 rounded-lg flex items-center gap-2 bg-red-500 hover:bg-red-600 transition-all duration-200 ${
            isDeleting ? 'cursor-not-allowed' : ''
          }`}
          onClick={() => handleDelete(property.id || '')}
          disabled={isDeleting}
        >
          {isDeleting ? '⏳ ...' : <><Trash2 size={16} /> حذف</>}
        </button>

        {/* Copy Button */}
        <button
          className={`px-4 py-2 rounded-lg flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition-all duration-200 ${
            isCopied ? 'bg-green-500' : ''
          }`}
          onClick={handleCopy}
        >
          {isCopied ? 'تم النسخ!' : <><Clipboard size={16} /> نسخ النص</>}
        </button>
      </div>
    </motion.div>
  );
}

export default MyPro;
