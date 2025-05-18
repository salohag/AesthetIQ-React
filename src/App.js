function App() {
  // ... all your code ...
}
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
export default App;


