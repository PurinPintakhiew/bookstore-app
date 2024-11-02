interface CategoryListProps {
  data: Array<{
    id: number;
    title: string;
  }>;
}

export default function CategoryList({ data }: CategoryListProps) {
  return (
    <div className="grid grid-cols-12">
      {data?.length > 0 &&
        data?.map((item: any, index: number) => (
          <div key={index} className="col-span-12 md:col-span-3">
            {item?.title}
          </div>
        ))}
    </div>
  );
}
