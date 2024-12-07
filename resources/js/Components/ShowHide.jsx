export default function ShowHide({
    title,
    isShow,
    setIsShow,
    children,
    index,
}) {
    return (
        <div>
            <div className="mt-2 rounded-md p-4 ring-1 ring-slate-400">
                <div className="flex items-center justify-between">
                    <h1>{title}</h1>
                    <button
                        onClick={() => {
                            setIsShow((prev) => (prev == index ? null : index));
                        }}
                        className="rounded px-2 py-1 ring-1"
                    >
                        {isShow == index ? "Hide" : "Show"}
                    </button>
                </div>
                {isShow == index ? (
                    <div className={`mt-4 overflow-hidden border-t p-2`}>
                        <p className="w-full text-justify">{children}</p>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}
