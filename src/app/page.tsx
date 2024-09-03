import HeroSection from "./components/Header/HeroSection";
import PostListView from "./components/PostListView";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PostListView />
    </main>
  );
}
