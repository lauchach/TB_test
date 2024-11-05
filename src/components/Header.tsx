import React from 'react';
import { Coffee, Settings, PlusCircle } from 'lucide-react';

interface HeaderProps {
  onRegisterClick: () => void;
}

export default function Header({ onRegisterClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Coffee className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Keyoss Management</h1>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={onRegisterClick}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <PlusCircle className="w-5 h-5" />
              <span>New Keyoss</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Settings className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}