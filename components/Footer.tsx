import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-white/8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8 text-center">
          <div>
            <div className="flex justify-center mb-4">
              <Image
                src="/syntrak-logo.svg"
                alt="Syntrak"
                width={140}
                height={45}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-[#a1a1aa]">
              Personalized Ski Coaching via Smart Thermals
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <p className="text-[#a1a1aa] mb-2">Get in touch with us</p>
            <a
              href="mailto:contact@syntrak.com"
              className="text-[#667eea] hover:text-[#764ba2] transition-colors"
            >
              contact@syntrak.com
            </a>
          </div>
        </div>
        <div className="border-t border-white/8 pt-8 text-center text-[#71717a]">
          <p>&copy; {new Date().getFullYear()} Syntrak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

