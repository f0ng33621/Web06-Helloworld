import { Icon } from '@iconify/react';

function SearchBar() {
  return (
    <div className="bg-primary3 h-20 w-full flex justify-center items-center">
      <form action="/search" className='w-4/5 px-4'>
        <div className='relative'>
          <input type="text" name="Search-bar" className='w-full h-12 border-3 border-primary4 shadow p-4 bg-primary5 ' id="search-bar" />
          <button type='submit'>
            <Icon icon="tabler:search" width="40" height="40" className='absolute top-1 right-3 px-2 text-primary4' />
          </button>

        </div>
      </form>
    </div>

  )
}

export default SearchBar