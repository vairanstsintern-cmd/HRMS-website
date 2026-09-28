import { X, Globe, Share2, Mail } from "lucide-react";

// Inline SVG icons for social brands removed from lucide-react v1.48+
const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 border-t border-gray-800 text-gray-400">
      <div className="container-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Shenll<span className="text-red-500">HRMS</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              The intelligent HR platform for modern teams. Manage everything from payroll to performance with AI-powered workflows.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors" aria-label="X (Twitter)">
                <X size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">PRODUCT</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#platform" className="hover:text-white transition-colors">Core HR</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Payroll</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Attendance</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Performance</a></li>
              <li><a href="#ai" className="hover:text-white transition-colors flex items-center gap-2">AI <span className="text-[10px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded">NEW</span></a></li>
              <li><a href="#mobile" className="hover:text-white transition-colors">Mobile</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">RESOURCES</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">COMPANY</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Shenll</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Shenll Technology Solutions Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
