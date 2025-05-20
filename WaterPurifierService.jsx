import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

export default function WaterPurifierService() {
  const [form, setForm] = useState({ name: '', email: '', message: '', phone: '', service: '', address: '', date: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking request sent. We will contact you shortly on WhatsApp and Email.');
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="bg-blue-800 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Ascent RO Garage</h1>
        <p className="text-sm">Your Trusted Water Purifier Service Partner</p>
      </header>

      <a
        href="https://wa.me/919711268198"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat on WhatsApp
      </a>

      <nav className="bg-black text-white flex justify-center gap-6 py-4">
        <a href="#home" className="hover:text-blue-400">Home</a>
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#services" className="hover:text-blue-400">Services</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </nav>

      <section id="home" className="p-10 text-center bg-white">
        <h2 className="text-4xl font-semibold text-blue-900 mb-4">Welcome to Ascent RO Garage</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">We provide top-notch water purifier repair, service, and installation with a focus on quality and customer satisfaction.</p>
      </section>

      <section id="about" className="p-10 bg-blue-50">
        <h2 className="text-3xl text-blue-900 font-bold mb-4">About Us</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">With over 5 years of experience, Ascent RO Garage has served hundreds of satisfied customers. We are known for timely service, genuine parts, and expert technicians.</p>
      </section>

      <section id="services" className="p-10 bg-white">
        <h2 className="text-3xl text-blue-900 font-bold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['RO Installation', 'RO Repair', 'Annual Maintenance', 'Filter Replacement', 'Water Quality Testing', 'AMC Plans'].map(service => (
            <Card key={service} className="bg-blue-100">
              <CardContent className="p-4 text-center">
                <h3 className="text-xl font-semibold text-blue-800">{service}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="p-10 bg-blue-50">
        <h2 className="text-3xl text-blue-900 font-bold mb-6 text-center">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
            <img key={num} src={`https://via.placeholder.com/200?text=Image+${num}`} alt={`Service ${num}`} className="rounded-lg shadow-md" />
          ))}
        </div>
      </section>

      <section id="contact" className="p-10 bg-white">
        <h2 className="text-3xl text-blue-900 font-bold mb-6 text-center">Book a Service</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
          <Input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <Input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <Input type="text" name="phone" placeholder="Your Phone Number" value={form.phone} onChange={handleChange} required />
          <Input type="text" name="address" placeholder="Your Address" value={form.address} onChange={handleChange} required />
          <Input type="text" name="service" placeholder="Service Required (e.g., RO Repair)" value={form.service} onChange={handleChange} required />
          <Input type="date" name="date" value={form.date} onChange={handleChange} required />
          <Textarea name="message" placeholder="Additional Message" value={form.message} onChange={handleChange} />
          <Button type="submit" className="bg-blue-800 text-white hover:bg-blue-600">Book Now</Button>
        </form>

        <div className="mt-10 text-center">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Visit Us</h3>
          <p className="text-gray-700">SE-29, Jaipuria Sunrise Plaza & 599 GF Nyay Khand 2, Indirapuram, Ghaziabad, UP-201014</p>
          <iframe
            className="mt-4 w-full h-64 rounded-md"
            src="https://www.google.com/maps?q=Jaipuria+Sunrise+Plaza,+Indirapuram,+Ghaziabad&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <footer className="bg-black text-white text-center py-4 mt-10">
        <p>&copy; {new Date().getFullYear()} Ascent RO Garage. All rights reserved.</p>
      </footer>
    </div>
  );
}