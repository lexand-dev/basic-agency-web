import { Footer } from "@/components/footer";
import Header from "@/components/header";

interface HomeLayoutProps {
  children: React.ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default HomeLayout;
