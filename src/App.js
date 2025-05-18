import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', treatment: '', provider: '' });
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleProviderChange = (value) => setFormData({ ...formData, provider: value });
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSuccessMessage('Thank you! We will contact you shortly.');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-[#fdf6f6] px-4 py-12">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-[#2f2f2f] text-white hover:bg-[#1f1f1f]">Book Now</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book a Consultation</DialogTitle>
            <DialogDescription>Fill out the form and upload a selfie to simulate your aesthetic treatment.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="treatment">Treatment Area</Label>
              <Input id="treatment" name="treatment" value={formData.treatment} onChange={handleChange} placeholder="e.g. Lips, Jawline, Cheeks" />
            </div>
            <div>
              <Label>Provider</Label>
              <Select onValueChange={handleProviderChange}>
                <SelectTrigger><SelectValue placeholder="Choose a provider" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Dr. Noor">Dr. Noor</SelectItem>
                  <SelectItem value="Ghada, NP">Ghada, NP</SelectItem>
                  <SelectItem value="Any available">Any available</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Upload a Selfie</Label>
              <Input type="file" accept="image/*" onChange={handleImageUpload} />
              {selectedImage && (
                <motion.img
                  src={selectedImage}
                  alt="Preview"
                  className="mt-3 w-full h-48 object-cover rounded-xl border"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              )}
            </div>
            <Button type="submit" className="mt-4 bg-[#2f2f2f] text-white hover:bg-[#1f1f1f]" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
            {successMessage && <p className="text-green-600 text-sm mt-2">{successMessage}</p>}
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;


