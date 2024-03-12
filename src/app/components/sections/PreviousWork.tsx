import SecondaryButton from '../buttons/SecondaryButton';

export default function PreviousWork() {
  return (
    <div className='uppercase'>
      <h2 className='text-xs underline pb-2'>Previous Work</h2>
      <SecondaryButton text='View Portfolio' href='../../portfolio' />
    </div>
  );
}
