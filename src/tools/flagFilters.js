const filterFlags = ( flags, filters ) => {
     return flags.filter(flag => {
        for(let i in filters.type){
            if(flag.type === filters.type[i]){
                return flag;
            }
        }
        return null;
    });
}

const removeFilterOption = ( filterName, setFlagFilters, flagFilters ) => {
    setFlagFilters({type: flagFilters.type.filter(type => ( type !== filterName ))});
}
const addFilterOption = ( filterName, setFlagFilters, flagFilters ) => {
    setFlagFilters({type: [...flagFilters.type, filterName]});
}

export { filterFlags, removeFilterOption, addFilterOption };