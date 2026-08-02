export default function EmailPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-[100] overflow-auto bg-[#F1F1F6]">
      {children}
    </div>
  );
}
