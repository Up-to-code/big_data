"use client"
import React, { useState } from 'react'
import { Property } from '@/firebase/create'
import { deleteProperty } from '@/firebase/deleteProperty';
import { motion } from 'framer-motion'; // Import motion from 'framer-motion'

function MyPro(
  
    {property}:{property:Property}
) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async (id: string) => {
    if (id) {
      if (confirm("Are you sure you want to delete this property?")) {
        setIsDeleting(true);
        await deleteProperty(id);
        setIsDeleting(false);
        setIsDeleted(true);
      }
    }
  };

  return (
    <motion.div className={`border p-4 rounded-lg shadow-lg text-right ${isDeleted ? 'hidden' : ''}`} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <h1 className='text-2xl font-bold mb-2'>{property.name}</h1>
        <p className='text-lg mb-2'>السعر: {property.price}</p>
        <p className='text-lg mb-2'>الموقع: {property.location}</p>
        <p className='text-lg mb-2'>اسم الاتصال: {property.contactName}</p>
        <p className='text-lg mb-2'>هاتف الاتصال: {property.contactPhone}</p>
        <p className='text-lg mb-2'>النوع: {property.type}</p>
        <p className='text-lg mb-2'>المساحة: {property.area}</p>
        <p className='text-lg mb-2'>الوصف: {property.description}</p>
        <button className='bg-red-500 text-white px-4 py-2 mt-4 rounded' onClick={() => handleDelete(property.id || '')} disabled={isDeleting}>{isDeleting ? 'Deleting...' : 'حذف'}</button>
    </motion.div>
  )
}

export default MyPro