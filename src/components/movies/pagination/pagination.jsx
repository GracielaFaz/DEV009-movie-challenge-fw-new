import './pagination.css'

export default function  Pagination({ currentPage, setCurrentPage, movieListLength}) {

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage-1);
    } 
  };

  const handleNextPage = () => {
    // eslint-disable-next-line no-debugger
    // debugger 
    if ( movieListLength > 0) {
      setCurrentPage(currentPage + 1); 
    }
  
  };

  return (
    <div className='pagination'>
      <button onClick={handlePrevPage}> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAQBJREFUaEPtl+EJQjEQg/M20U10E51MR3EUR5GCBXmo9GguRyH9fdeXLzna1w2Lr21x/TBAdYJOwAlMOuARmjRwut0JTFs4uYETCBh4AvAI1A+VqhK4ALgBuAO4DikbLFIAdPFdEhUiG2AvvkOcWeOUCfBLfBuhlgJlZQFIxDcHMgBk4jMApOLZAHLxTIAS8SyAMvEMgFLxBnjfRKUpsO6BMggWQAujBIIJUALBBpBDZABIIbIAZBCZAP8gjgCejAdBNsA3iCUeNHtz+xFLFc/4lYhMwYE1Np8fVYxQBDJca4CwZeQGJ0A2NLydEwhbRm5wAmRDw9s5gbBl5IblE3gB1SUuMTeF2uwAAAAASUVORK5CYII=" className="arrow"/></button>
      <button onClick={handleNextPage}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAPdJREFUaEPtl8EJAlEMRGc7sRQ7USvTTrQTLUVyWNjDCoHkRRbmn/aQhHkzH7J/0cHPcnD9MsC/E3QCTqDogK9Q0cByuxMoW1gc4AR+GHiW9Cqam2onEnhIuki6SYpv9HQDrOJX0ThEJ0Bcm+eO3ShEJ0Bov0q6T0J0A4xDEACjEBTAGAQJMAJBA+AQEwAoxBQABmGA5I8OtuAmEsDEh3k0ACqeBsDFkwAj4imAMfEEwKj4boCTpPfkW6AbYG/boq8xAmALgYunAGJuXKdPckuXyuhFVhKXaTZAxiWyxgmQ7mZmO4GMS2SNEyDdzcx2AhmXyJrDJ/AF7R4uMZuOMGYAAAAASUVORK5CYII=" className="arrow"/></button>
    </div>
  );
}