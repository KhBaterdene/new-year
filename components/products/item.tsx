import Image from 'next/image';
import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  DialogClose,
} from '@radix-ui/react-dialog';

const Item = () => {
  return (
    <div className="w-full md:w-6/12 p-3">
      <Root>
        <Trigger asChild>
          <div className="relative aspect-w-16 aspect-h-9">
            <Image src="/logo.jpg" alt="logo" fill className="object-cover" />
          </div>
        </Trigger>
        <Portal className="w-screen h-screen">
          <Overlay className="bg-black/30 fixed inset-0 z-30 motion-safe:animate-[show_150ms_cubic-bezier(0.16,1,0.3,1)]" />
          <Content className="bg-black rounded-lg shadow-xl fixed inset-0 z-40">
            <iframe
              className="h-full w-full"
              src="https://360.minu.mn/beta/matrix/matrix.html"
            ></iframe>
            <DialogClose className="fixed z-50 top-0 left-1/2 px-6 pb-3 pt-2 bg-white text-black rounded-b-full -translate-x-2/4">
              Хаах
            </DialogClose>
          </Content>
        </Portal>
      </Root>
    </div>
  );
};

export default Item;
