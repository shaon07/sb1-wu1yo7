import React from 'react';
import { Users, Eye, TrendingUp } from 'lucide-react';

export default function ContactForm() {
  return (
    <section className="py-20 px-4 bg-darker">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="slide-in">
            <h2 className="text-3xl font-bold mb-2">Reserve a Call</h2>
            <p className="text-gray-400 mb-6">Got a project in mind?</p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400 group">
                <Users className="h-5 w-5 text-red-500 mr-3 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-gray-300 transition-colors">
                  An in depth session to understand your needs
                </span>
              </li>
              <li className="flex items-center text-gray-400 group">
                <TrendingUp className="h-5 w-5 text-red-500 mr-3 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-gray-300 transition-colors">
                  Learn which plan is right for your team
                </span>
              </li>
              <li className="flex items-center text-gray-400 group">
                <Eye className="h-5 w-5 text-red-500 mr-3 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-gray-300 transition-colors">
                  Get onboarding help
                </span>
              </li>
            </ul>
          </div>

          <form className="space-y-4 fade-in">
            <input type="text" placeholder="Full Name" className="form-input" />
            <input
              type="email"
              placeholder="Work Email"
              className="form-input"
            />
            <select className="form-input">
              <option value="">Company Size</option>
              <option>1-20</option>
              <option>21-50</option>
              <option>51-200</option>
              <option>201+</option>
            </select>
            <textarea
              placeholder="How Can We Help?"
              rows={4}
              className="form-input"
            />
            <button type="submit" className="btn-primary w-full">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
