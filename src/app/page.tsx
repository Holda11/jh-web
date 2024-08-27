import style from "./page.module.css";
import Aboutme from '@/components/Aboutme';
import Contact from "@/components/Contact";
import Skill from '@/components/Skill';



export default function Home() {


  return (
    <main className={style["Main"]}>
      <Aboutme/>
      <Skill/>
      <Contact/>
    </main>
  );
}
