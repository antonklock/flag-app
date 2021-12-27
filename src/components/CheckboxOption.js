const CheckboxOption = ({
    type,
    isChecked,
    addFilterOption,
    removeFilterOption,
    setFlagFilters,
    flagFilters,
    checkAmountOfFlagGroups,
    setCanPlay
 }) => {
    return (
        <div>
                <input
                    type={ 'checkbox' }
                    className={'optionCheckbox'}
                    id={ type }
                    name={ type }
                    defaultChecked={ isChecked }
                    onChange={() => {
                        const checkbox = document.querySelector(`#${type}`);
                        if(checkbox.checked){
                            addFilterOption(type, setFlagFilters, flagFilters);
                        } else {
                            removeFilterOption(type, setFlagFilters, flagFilters);
                        }
                        setCanPlay( checkAmountOfFlagGroups() );
                    }}
                />
                <label htmlFor={ type }> { type }</label>
        </div>
    );
};

export default CheckboxOption;