import { useState } from 'react';
import { Form } from 'react-router-dom';

const HOUR_DESCRIPTIONS = ['No pref', '<1 hour', '<2 hours', '<3 hours', '3+ hours'];
const SIMPLICITY_DESCRIPTIONS = ['No Pref', '<10 steps', '<20 steps', '20+ steps'];

export default function SearchBar() {
  const [isAdvancedFilter, setIsAdvancedFilter] = useState(false);

  const [hourDescription, setHourDescription] = useState('No pref');
  const [simplicityDescription, setSimplicityDescription] = useState('No pref');


  return (
    <Form action="/search" method="GET" className="relative mb-5">
      <div className="search-bar relative rounded-lg bg-slate-800">
        <input type="text" name="q" id="search" className="bg-transparent px-3 py-1" placeholder="Search recipes..." />
        <button
          type="button"
          className="absolute right-2 top-1 text-sm text-blue-300 underline"
          onClick={() => setIsAdvancedFilter(prev => !prev)}
        >
          Advanced filter
        </button>
        {isAdvancedFilter && (
          <div className="absolute left-0 right-0 top-7 flex flex-col gap-3 rounded-b-lg bg-slate-600 px-3 py-2">
            <div className="flex gap-3">
              <label htmlFor="hour">Cook time</label>
              <input
                type="range"
                name="hour"
                id="hour"
                min="1"
                max="5"
                defaultValue={1}
                step="1"
                list="hour-ticks"
                className="w-36"
                onChange={e => setHourDescription(HOUR_DESCRIPTIONS[e.target.value - 1])}
              />
              <p>{hourDescription}</p>
              <datalist id="hour-ticks">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </datalist>
            </div>
            <div className="flex gap-3">
              <label htmlFor="simplicity">Simplicity</label>
              <input
                type="range"
                name="simplicity"
                id="simplicity"
                min="1"
                max="4"
                defaultValue={1}
                step="1"
                list="simplicity-ticks"
                className="w-36"
                onChange={e => setSimplicityDescription(SIMPLICITY_DESCRIPTIONS[e.target.value - 1])}
              />
              <p>{simplicityDescription}</p>
              <datalist id="simplicity-ticks">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </datalist>
            </div>
            <div>
              <fieldset className="flex gap-3">
                <legend>Protein:</legend>
                <div>
                  <input type="checkbox" id="protein-beef" name="protein" value="beef" />
                  <label htmlFor="protein-beef">Beef</label>
                </div>
                <div>
                  <input type="checkbox" id="protein-chicken" name="protein" value="chicken" />
                  <label htmlFor="protein-chicken">Chicken</label>
                </div>
                <div>
                  <input type="checkbox" id="protein-pork" name="protein" value="pork" />
                  <label htmlFor="protein-pork">Pork</label>
                </div>
              </fieldset>
            </div>
            <div className="self-end">
              <button type="button" className="rounded-md px-2 py-1" onClick={() => setIsAdvancedFilter(false)}>
                Cancel
              </button>
              <button type="submit" className="self-end rounded-md bg-sky-600 px-2 py-1">
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </Form>
  );
}
