import { ContactLinks, ContactBanner, Invite } from '@/components/contact/_components';

export const metadata = {
    title: "Contact",
    description: "Get in touch with John Octavio to discuss projects, collaborations, or opportunities."
};


export default function Contact() {
    return (
      <>
        <div className="w-3/5 md:w-4/5 flex flex-col gap-8 items-center justify-center font-manrope my-auto">
          <ContactBanner />
          <Invite />
          <ContactLinks />
        </div>
      </>
    )
}