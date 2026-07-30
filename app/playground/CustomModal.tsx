export default function CustomModal({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="w-full h-screen fixed top-0 left-0">
      {/* Backdrop layer — this is the only thing that gets the tint */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative flex justify-center items-center h-full">
        <form
          action=""
          className="border border-gray-400 text-black p-4 rounded-sm w-full max-w-md space-y-3 bg-white shadow-2xl z-50"
        >
          <div>
            <p className="text-black">Edit your profile</p>
            <p className="text-sm text-gray-500 italic">
              Change things about yourself
            </p>
          </div>
          <div>
            <label>
              <p>Name</p>
              <input
                type="text"
                id="name"
                arial-label="Name"
                className="border border-gray-400 rounded-md w-full h-10 px-1"
              />
            </label>
          </div>

          <div>
            <label>
              <p>Username</p>
              <input
                type="text"
                id="username"
                arial-label="Username"
                className="border border-gray-400 rounded-md w-full h-10 px-1"
              />
            </label>
          </div>

          <div className="flex justify-end items-center gap-2.5">
            <button
              aria-label="Close modal"
              type="button"
              className="px-2 py-2 bg-red-800 text-white rounded-full cursor-pointer "
              onClick={() => setOpen(false)}
            >
              Close
            </button>
            <button
              aria-label="Close modal"
              className="px-2 py-2 bg-green-800 text-white rounded-full cursor-pointer "
              type="submit"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
