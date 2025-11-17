export default function WaitListForm({
  showWaitListForm,
}: {
  showWaitListForm: boolean;
}) {
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    console.log({ fullName, email });
  };
  if (!showWaitListForm) {
    return null;
  }
  return (
    <section className="fixed inset-0 flex h-screen items-center justify-center bg-black/70">
      <div className="flex max-w-[488px] flex-col gap-8 rounded-4xl bg-[#FFFFFF] p-8">
        <header className="flex justify-between">
          <span className="">Join our Waitlist now 🚀🚀</span>
        </header>
        <div>
          <h2 className="text-center text-[26px] font-bold">
            Join thousands of readers
          </h2>
          <p className="mt-[17px] text-center">
            Fill the form below and be the first to know when we launch. Get
            early access and exclusive updates
          </p>
        </div>

        <form onSubmit={onFormSubmit} className="mt-4 flex flex-col gap-4">
          <label htmlFor="fullName">Full name</label>
          <div className="flex rounded-[50px] border-[0.5px] border-black px-[15px] py-2.5">
            <span>ico</span>
            <input
              type="text"
              id="fullName"
              className="h-[30px] flex-1 border border-black py-5"
            />
          </div>
          <label htmlFor="email">Email address</label>
          <input type="text" id="Email" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
