import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Twitter, Github, Youtube, Linkedin, Slack } from "lucide-react"

export default function Footer() {
  return (
    <footer className=" py-12  px-[36px] md:px-[52px]">
      <div >
        <div className="h-[1px] w-full overflow-hidden relative">
          <div
            className="h-[1px] bg-black w-full absolute"
            style={{ transform: "translateX(0%) translateZ(0px);" }}
          ></div>
        </div>
        {/* Logo */}
        <div className="mb-12 mt-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/apexlabs.png" alt="Logo" className="h-12" />
          </Link>

          <div className="flex flex-wrap gap-2 mb-8">
            <Link
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-[#000000] text-white rounded-[8px]"
            >
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-[#000000] text-white rounded-[8px]"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-[#000000] text-white rounded-[8px]"
            >
              <Youtube className="w-5 h-5" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-[#000000] text-white rounded-[8px]"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-[#000000] text-white rounded-[8px]"
            >
              <Slack className="w-5 h-5" />
              <span className="sr-only">Slack</span>
            </Link>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address column */}
          <div>
            <div className="space-y-8 lg:col-span-4">
              <div>
                <h1 className="text-lg">Address</h1>
                <Link
                  href="mailto:hello@moonlab.co"
                  className="text-sm hover:underline"
                >
                  <h1 className="text-[18px]">Suite 2 <br />
                    Kalane Nagar
                    Indore, <br />
                    452002 M.P India</h1>
                </Link>
              </div>
            </div>
          </div>

          {/* Email column */}
          <div>
            <div className="space-y-8 lg:col-span-4">
              <div>
                <h1 className="text-lg">General enquiries</h1>
                <Link
                  href="mailto:hello@moonlab.co"
                  className="text-sm hover:underline"
                >
                  <h1 className="text-xl">hello@apexlabs.in</h1>
                </Link>
              </div>

              <div>
                <h1 className="text-lg">For Business</h1>
                <Link
                  href="mailto:hello@moonlab.co"
                  className="text-sm hover:underline"
                >
                  <h1 className="text-xl">hello@apexlabs.in</h1>
                </Link>
              </div>
            </div>

          </div>

          {/* Company column */}
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#e9e356] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#e9e356] transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#e9e356] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#e9e356] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter and social */}
          <div>


            <h3 className="text-lg font-medium mb-4">Subscribe to the Timescale Newsletter</h3>
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-transparent border-white/20 text-white rounded-[8px]"
              />
              <Button className="bg-white text-black hover:bg-[#e9e356] rounded-[8px]">Subscribe</Button>
            </div>
            <p className="text-sm text-gray-400">
              By submitting, you acknowledge Timescale's{" "}
              <Link href="#" className="underline hover:text-[#e9e356]">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black my-8"></div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">2025 © Apexlabs Inc. All rights reserved.</div>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-black">
              Privacy preferences
            </Link>
            <Link href="#" className="text-gray-400 hover:text-black">
              Legal
            </Link>
            <Link href="#" className="text-gray-400 hover:text-black">
              Privacy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-black">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
