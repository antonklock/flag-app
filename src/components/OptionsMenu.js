import CheckboxOption from './CheckboxOption';
import { addFilterOption, removeFilterOption } from '../tools/flagFilters';

const checkAmountOfFlagGroups = () => {
    const checkedCheck = Array.from(document.getElementsByClassName('optionCheckbox'));
    const array = [];
    checkedCheck.forEach(e => array.push(e.checked));

    return array.some(e => e === true);
};

const OptionsMenu = ({ setFlagFilters, flagFilters, setCanPlay }) => {
    return (
        <div id="checkboxes">
            <CheckboxOption
                name='Letters'
                type='letter'
                isChecked={ true }
                addFilterOption={ addFilterOption }
                removeFilterOption={ removeFilterOption }
                setFlagFilters={ setFlagFilters }
                flagFilters={ flagFilters }
                checkAmountOfFlagGroups={ checkAmountOfFlagGroups }
                setCanPlay={ setCanPlay }
            />
            <CheckboxOption
                name='Numbers'
                type='number'
                isChecked={ true }
                addFilterOption={ addFilterOption }
                removeFilterOption={ removeFilterOption }
                setFlagFilters={ setFlagFilters }
                flagFilters={ flagFilters }
                checkAmountOfFlagGroups={ checkAmountOfFlagGroups }
                setCanPlay={ setCanPlay }
            />
            <CheckboxOption
                name='Swedish letters'
                type='sweLetter'
                isChecked={ false }
                addFilterOption={ addFilterOption }
                removeFilterOption={ removeFilterOption }
                setFlagFilters={ setFlagFilters }
                flagFilters={ flagFilters }
                checkAmountOfFlagGroups={ checkAmountOfFlagGroups }
                setCanPlay={ setCanPlay }
            />
        </div>
    );
}

export default OptionsMenu;