"use client";

import { Plus, Save } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { createProperty } from "@/firebase/create";
function Create() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    propertyName: "",
    propertyLocation: "",
    propertyPrice: "",
    propertyDescription: "",
    propertyType: "",
    propertyArea: "",
    contactName: "",
    contactPhone: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    setLoading(true); // Set loading to true when saving starts
    try {
      await createProperty({
        name: formData.propertyName,
        price: parseFloat(formData.propertyPrice),
        location: formData.propertyLocation,
        contactName: formData.contactName,
        contactPhone: formData.contactPhone,
        type: formData.propertyType,
        area: formData.propertyArea,
        description: formData.propertyDescription,
        createdAt: new Date(), // Added createdAt field as required by Property interface
      });
      setLoading(false); // Set loading to false when saving is done
      setFormData({ // Clear form data after successful save
        propertyName: "",
        propertyLocation: "",
        propertyPrice: "",
        propertyDescription: "",
        propertyType: "",
        propertyArea: "",
        contactName: "",
        contactPhone: "",
      });
      window.location.reload(); // Reload the page after successful save
    } catch (error) {
      setError("An error occurred while saving the property. Please try again.");
      setLoading(false); // Set loading to false in case of error
    }
  };

  return (
    <div className="rtl">
      {/* Button to trigger the sheet */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-end mb-4 bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
      >
        <Plus />
        <span className="mr-2">إنشاء عقار جديد</span>
      </Button>

      {/* Motion container for animation */}
      {isOpen && (
        <motion.div
          className="mt-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-gray-800 dark:text-gray-200 max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Dialog structure with RTL support */}
          <div className="text-right">
            <h1 className="text-2xl font-bold mb-4">إنشاء عقار جديد</h1>

            {/* Form field: Property Name */}
            <div className="mt-4">
              <Label className="block mb-1">اسم العقار</Label>
              <Input
                name="propertyName"
                value={formData.propertyName}
                onChange={handleChange}
                placeholder="اسم العقار"
                className="text-right border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 rtl"
              />
            </div>

            {/* Form field: Property Location */}
            <div className="mt-4">
              <Label className="block mb-1">موقع العقار</Label>
              <Input
                name="propertyLocation"
                value={formData.propertyLocation}
                onChange={handleChange}
                placeholder="موقع العقار"
                className="text-right border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 rtl"
              />
            </div>

            {/* Form field: Property Price */}
            <div className="mt-4">
              <Label className="block mb-1">سعر العقار</Label>
              <Input
                type="number"
                name="propertyPrice"
                value={formData.propertyPrice}
                onChange={handleChange}
                placeholder="سعر العقار"
                className="text-right border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 rtl"
              />
            </div>

            {/* Form field: Property Area */}
            <div className="mt-4">
              <Label className="block mb-1">مساحة العقار (متر مربع)</Label>
              <Input
                type="number"
                name="propertyArea"
                value={formData.propertyArea}
                onChange={handleChange}
                placeholder="مساحة العقار"
                className="text-right border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 rtl"
              />
            </div>

            {/* Form field: Property Type */}
            <div className="mt-4">
              <Label className="block mb-1">نوع العقار</Label>
              <Select
                value={formData.propertyType}
                onValueChange={(value) => setFormData({ ...formData, propertyType: value })}
              >
                <SelectTrigger className="text-right">
                  <span>{formData.propertyType || "اختر نوع العقار"}</span>
                </SelectTrigger>
                <SelectContent className="text-right bg-white border-none shadow-md">
                  <SelectItem className="text-right hover:bg-zinc-100" value="شقة">شقة</SelectItem>
                  <SelectItem className="text-right hover:bg-zinc-100" value="فيلا">فيلا</SelectItem>
                  <SelectItem className="text-right hover:bg-zinc-100" value="محل تجاري">محل تجاري</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Form field: Property Description */}
            <div className="mt-4">
              <Label className="block mb-1">وصف العقار</Label>
              <Textarea
                name="propertyDescription"
                value={formData.propertyDescription}
                onChange={handleChange}
                placeholder="وصف العقار"
                className="text-right border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 rtl"
              />
            </div>

            {/* Contact Name */}
            <div className="mt-4">
              <Label className="block mb-1">اسم المتصل</Label>
              <Input
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                placeholder="اسم المتصل"
                className="text-right border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 rtl"
              />
            </div>

            {/* Contact Phone */}
            <div className="mt-4">
              <Label className="block mb-1">رقم هاتف المتصل</Label>
              <Input
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                placeholder="رقم هاتف المتصل"
                className="text-right border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 rtl"
              />
            </div>

            {/* Note section */}
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              <p>* يُرجى ملء جميع الحقول بدقة.</p>
            </div>

            {/* Save button */}
            <Button
              onClick={handleSave}
              className="flex items-center gap-2 bg-green-500 text-white w-full hover:bg-green-600 transition duration-200 mt-6"
              disabled={loading} // Disable button while loading
            >
              {loading ? <span>جاري الحفظ...</span> : <><Save /><span>حفظ</span></>}
            </Button>
          </div>
        </motion.div>
      )}

      {/* Error handling */}
      {error && (
        <div className="mt-4 text-red-500 dark:text-red-400">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default Create;
