export default async function handleSubmit(e, path, message, dummy) {
    e.preventDefault();
    const data = new FormData(e.target);
    if (!data.get(dummy)) {
        data.delete(dummy);
        const res = await fetch(path, { method: "POST", body: data });

        const msg = e.target.parentElement.querySelector(".msg");
        msg.classList.add("text-red-600", "text-emerald-600");
        msg.classList.replace("opacity-0", "opacity-100");
        if (res.ok) {
            msg.classList.remove("text-red-600");
            msg.textContent = message;
            return true;
        } else {
            msg.classList.remove("text-emerald-600");
            msg.textContent = "❌ Error! Please check your info!";
            return false;
        };
    };
};