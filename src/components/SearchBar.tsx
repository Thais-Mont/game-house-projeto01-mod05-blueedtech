export default function SearchBar({ searchQuery, setSearchQuery}) {
  return (
    <form action="/" method="get">
    <input
        value={searchQuery}
        onInput={e => setSearchQuery(e.target.value)}
        className="bg-[#1c281c] mt-4 mx-1 py-1 px-1 items-center rounded"
        type="text"
        id="header-search"
        placeholder="Procure seu jogo"
        name="s" 
    />
    <button
    className="bg-[#1c281c] mt-4 mx-1 py-1 px-1 items-center rounded"
     type="submit">Buscar</button>
</form>
              );
}
