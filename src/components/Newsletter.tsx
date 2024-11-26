export default function Newsletter() {
  return (
    <div className="container mx-auto px-4 py-8 bg-darker">
      <div className="bg-[#1F1111] rounded-xl p-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium mb-1">Newsletter</h3>
          <p className="text-gray-400 text-sm">
            Be the first one to know about insights, technologies and
            innovations.
          </p>
        </div>
        <button className="btn-primary whitespace-nowrap">Subscribe</button>
      </div>
    </div>
  );
}
