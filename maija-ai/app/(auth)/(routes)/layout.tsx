const AuthLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <main className="h-full bg-[#fbf7f7] flex items-center justify-center">
      {children}
    </main>
  );
}
 
export default AuthLayout;