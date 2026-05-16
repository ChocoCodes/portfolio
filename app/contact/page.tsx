import { ContactLinks, ContactBanner, Invite } from '@/components/contact/_components';

export const metadata = {
    title: "Contact",
    description: "Get in touch with John Octavio to discuss projects, collaborations, or opportunities."
};


export default function Contact() {
    return (
      <>
        <div className="w-3/5 md:w-4/5 flex justify-between items-center font-manrope my-auto">
          <ContactLinks />
          <div className="flex flex-col items-end text-end gap-4">
            <ContactBanner />
            <Invite />
          </div>
        </div>
      </>
    )
}