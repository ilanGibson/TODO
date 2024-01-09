import priority1Image from "../src/images/priority1Image.png";
import priority2Image from "../src/images/priority2Image.png";
import priority3Image from "../src/images/priority3Image.png";
import priority4Image from "../src/images/priority4Image.png";
import priority5Image from "../src/images/priority5Image.png";

export default function loadPriorityImage(priority) {
    switch (priority) {
        case "1":
            return priority1Image;
        case "2":
            return priority2Image;
        case "3":
            return priority3Image;
        case "4":
            return priority4Image;
        case "5":
            return priority5Image;
        default:
            return priority1Image;
    }
}