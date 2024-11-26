export default function Newsletter() {
  return (
    <div className="container mx-auto px-4 py-8 bg-white dark:bg-darker">
      <div className="bg-gray-200 dark:bg-lightRed rounded-xl p-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg text-dark dark:text-white font-medium mb-1">Newsletter</h3>
          <p className="text-dark dark:text-gray-200 text-sm">
            Be the first one to know about insights, technologies and
            innovations.
          </p>
        </div>
        <button className="btn-primary whitespace-nowrap">Subscribe</button>
      </div>
    </div>
  );
}
