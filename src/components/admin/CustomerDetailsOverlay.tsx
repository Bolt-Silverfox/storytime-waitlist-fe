const CustomerDetailsOverlay = ({
  userId,
  handleClose,
}: {
  userId: string;
  handleClose: () => void;
}) => {
  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mx-10 flex w-full flex-col gap-x-6 rounded-lg bg-white p-6 md:flex-row xl:mx-auto xl:max-w-[1113px]"
      >
        <section className="flex flex-col">
          <div>
            <span>Image url {userId}</span>
          </div>
          <div>
            <span>Last active</span>
          </div>
        </section>
        <section className="flex flex-1 flex-col gap-y-6">
          <div className="flex flex-row gap-x-5">
            <div className="border-border rounded-md border">
              total credit used
            </div>
            <div className="border-border rounded-md border">
              Total amount spent
            </div>
          </div>
          <div className="border-border flex flex-col rounded-md border">
            <div>
              <h3>App usage</h3>
              <p>How features are used</p>
            </div>
            <input
              // value={searchValue}
              // onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              type="text"
              className="border-border focus:ring-brand flex h-10 w-[280px] items-center justify-center self-end rounded-lg border pl-9 text-black transition-all duration-300 placeholder:text-gray-500 focus:w-sm focus:ring focus:ring-offset-1 focus:outline-none"
            />
            <div className="border-border rounded-md border"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CustomerDetailsOverlay;
