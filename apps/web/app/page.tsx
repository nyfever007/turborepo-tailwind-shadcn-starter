import { Button } from '@repo/ui/components/ui/button';

export default function Page(): JSX.Element {
  return (
    <div className='flex justify-center items-center w-full h-screen px-5'>
      <div>
        <p className='text-4xl font-bold'>
          tailwind is working as expected if this text is bold and large
        </p>
        <div>
          <p> shadcn/ui shared implment test</p>
          <Button className='bg-blue-500 text-white' variant='default'>
            shadcn/ui button
          </Button>
        </div>
      </div>
    </div>
  );
}
