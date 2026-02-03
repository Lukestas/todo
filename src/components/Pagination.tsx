import type { PaginationProps } from '../types/Types'; // PaginationProps Interface import

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}: PaginationProps) {
  // pages is a new array with the number of totalpages
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // isFirstPage is used to determinate if the currentPage is 1
  const isFirstPage = currentPage === 1;
  // isLastPage is used to determinate if the currentPage is equals to totalPages
  const isLastPage = currentPage === totalPages;

  // handlePrevClic is used to send the previous page number only if it isn't one
  const handlePrevClick = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };
  // handleNextClick is used to send the next page number only if it isn't the last one
  const handleNextClick = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  // HTML structure, it have a navegation with two button to go to previous and next page
  // and a list of buttons with the number of pages
  return (
    <nav className='pagination'>
      {totalPages < 10 && (
        <>
          <button
            className={
              isFirstPage || totalPages === 0 ? 'isFirstOrLastPage' : ''
            }
            onClick={handlePrevClick}
          >
            &lt;
          </button>
          {pages.map((page) => (
            <button
              key={page}
              className={currentPage === page ? 'isActive' : ''}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}
          <button
            className={
              isLastPage || totalPages === 0 ? 'isFirstOrLastPage' : ''
            }
            onClick={handleNextClick}
          >
            &gt;
          </button>
        </>
      )}
    </nav>
  );
}
