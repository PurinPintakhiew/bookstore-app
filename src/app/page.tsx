import CategoryList from "@/components/pages/home/CategoryList";
import categories from "@/data/categories.json";

export default function Home() {
  return (
    <div className="container">
      <main>
        <div className="mt-5">
          <CategoryList data={categories} />
        </div>
      </main>
    </div>
  );
}
