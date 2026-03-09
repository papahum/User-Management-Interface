interface Props{
 search:string
 setSearch:(value:string)=>void
}

export default function SearchBar({search,setSearch}:Props){

 return(

  <input
className="w-full bg-[#163832] text-[#DAF1DE] font-semibold border border-[#235347] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8EB69B]"
placeholder="Search by name or email..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

 )

}