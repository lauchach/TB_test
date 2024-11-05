import React, { useState } from 'react';
import { PlusCircle, X } from 'lucide-react';
import { Dispenser } from '../types';

interface RegisterKeyossProps {
  onRegister: (dispenser: Omit<Dispenser, 'id'>) => void;
  onClose: () => void;
}

export default function RegisterKeyoss({ onRegister, onClose }: RegisterKeyossProps) {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newDispenser: Omit<Dispenser, 'id'> = {
      name: formData.name,
      location: formData.location,
      status: 'operational',
      ingredients: [
        { id: 'milk', name: 'Fresh Milk', currentLevel: 5000, maxLevel: 5000, unit: 'ml' },
        { id: 'coffee', name: 'Coffee Powder', currentLevel: 1000, maxLevel: 1000, unit: 'g' },
        { id: 'sugar', name: 'Sugar Syrup', currentLevel: 2000, maxLevel: 2000, unit: 'ml' },
        { id: 'tea', name: 'Tea Powder', currentLevel: 800, maxLevel: 800, unit: 'g' },
      ],
      drinks: [
        {
          id: 'latte',
          name: 'Café Latte',
          price: 45,
          available: true,
          ingredients: [
            { ingredientId: 'milk', amount: 200 },
            { ingredientId: 'coffee', amount: 18 },
          ],
        },
        {
          id: 'americano',
          name: 'Americano',
          price: 35,
          available: true,
          ingredients: [
            { ingredientId: 'coffee', amount: 18 },
          ],
        },
        {
          id: 'milk-tea',
          name: 'Milk Tea',
          price: 40,
          available: true,
          ingredients: [
            { ingredientId: 'milk', amount: 150 },
            { ingredientId: 'tea', amount: 12 },
            { ingredientId: 'sugar', amount: 30 },
          ],
        },
      ],
    };

    onRegister(newDispenser);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Register New Keyoss</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Dispenser Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="e.g., Keyoss Siam"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              placeholder="e.g., Room"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <PlusCircle className="w-5 h-5" />
            <span>Register Dispenser</span>
          </button>
        </form>
      </div>
    </div>
  );
}