import DetailsImage from "@/components/DetailsImage";
import NavTow from "@/components/NavTow";



export default function RootLayout({ children, currentPage, title, Imagesrc, desc, option, linkOption }: { linkOption?: string, option?: string, title?: string, Imagesrc?: string, desc?: string, children: React.ReactNode; currentPage: string; }) {

  return (
    <>
      <NavTow currentPage={currentPage} option={option} linkOption={linkOption} />
      {title && Imagesrc && desc && (
        <DetailsImage
          title={title}
          Imagesrc={Imagesrc}
          desc={desc}
        />)
      }

      {children}
    </>
  );
}
