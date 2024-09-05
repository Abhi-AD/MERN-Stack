import { useSearchRestaurants } from "@/api/RestaurantApi";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import { SearchState } from "@/types";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SearchPage = () => {
     const { city } = useParams();
     const [searchState, setSearchState] = useState<SearchState>({
          searchQuery: "",
          page: 1,
          selectedCuisines: [],
          sortOption: "bestMatch",
     });
     const { results, isLoading } = useSearchRestaurants(searchState, city);



     const setSearchQuery = (searchFormData: SearchForm) => {
          setSearchState((prevState) => ({
               ...prevState,
               searchQuery: searchFormData.searchQuery,
               page: 1,
          }));
     };
     const resetSearch = () => {
          setSearchState((prevState) => ({
               ...prevState,
               searchQuery: "",
               page: 1,
          }));
     };
     const setPage = (page: number) => {
          setSearchState((prevState) => ({
               ...prevState,
               page,
          }));
     };
     if (isLoading) {
          <span>Loading ...</span>;
     }

     if (!results?.data || !city) {
          return <span>No results found</span>;
     }
     return (
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
               <div id="cuisines-list">
                    inser cuisines list
               </div>
               <div id="main-content" className="flex flex-col gap-5">
                    <SearchBar
                         searchQuery={searchState.searchQuery}
                         onSubmit={setSearchQuery}
                         placeHolder="Search by Cuisine or Restaurant Name"
                         onReset={resetSearch}
                    />
                    <SearchResultInfo
                         total={results.pagination.total}
                         city={city}
                    />
                    {results.data.map((restaurant) => (
                         <SearchResultCard restaurant={restaurant} />
                    ))}
                    {searchState.page !== 1 && (
                         <PaginationSelector
                              page={results.pagination.page}
                              pages={results.pagination.pages}
                              onPageChange={setPage}
                         />
                    )}
               </div>
          </div>
     )
}
export default SearchPage