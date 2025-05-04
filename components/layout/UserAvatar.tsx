// components/layout/UserAvatar.tsx

import { cn } from "@/lib/utils";
import Image from "next/image";

interface UserAvatarProps {
  size?: number;
  className?: string;
  // Optional: You might want to add an imageUrl prop later
  // if the avatar needs to be dynamic, e.g., imageUrl?: string | null;
}

export default function UserAvatar({ size, className }: UserAvatarProps) {
  // --- Corrected path for image inside public/_assets/ ---
  const imagePath = "/_assets/avatar-placeholder.png";
  // -------------------------------------------------------

  return (
    <Image
      // Use the corrected string path directly
      src={imagePath}
      alt="User avatar"
      width={size ?? 48}
      height={size ?? 48}
      className={cn(
        "aspect-square h-fit flex-none rounded-full bg-secondary object-cover",
        className,
      )}
      // priority={true} // Consider adding if needed
    />
  );
}
