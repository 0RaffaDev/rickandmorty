export default function SearchBar(onClose, onSearch) {
   return (
      <div>
         <input type='search' />
         <button onClick={onClose}>Agregar</button>
      </div>
   );
}
