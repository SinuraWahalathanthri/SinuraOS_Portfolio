import { WindowControls } from "#components";
import { gallery, photosLinks } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import { Mail, Search } from "lucide-react";

function Photos() {
  const { openWindow } = useWindowStore();

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />

        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          <h2>Photos</h2>

          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li key={id} className="flex items-center gap-2">
                <img src={icon} alt={title} className="w-4 h-4" />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery flex-1 overflow-auto p-4">
          <ul className="grid grid-cols-3 gap-4">
            {gallery.map(({ id, img }) => (
              <li
                key={id}
                className="cursor-pointer hover:scale-105 transition"
                onClick={() =>
                  openWindow("imgfile", {
                    id,
                    name: "Gallery image",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    imageUrl: img,
                  })
                }
              >
                <img
                  src={img}
                  alt={`Gallery image ${id}`}
                  className="w-full h-32 object-cover rounded"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

const PhotoWindow = WindowWrapper(Photos, "photos");
export default PhotoWindow;
