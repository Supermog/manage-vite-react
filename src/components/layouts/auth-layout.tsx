import authBackground from '@/assets/auth-background.jpg';

type AuthLayoutProps = {
  children?: React.ReactNode;
};

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex flex-col mx-auto justify-center min-h-full w-1/2 bg-gray-900">
        <main className="w-full flex justify-center">{children}</main>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          src={authBackground}
          alt="background"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export { AuthLayout };
