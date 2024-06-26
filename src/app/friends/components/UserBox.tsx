"use client";

import axios from "axios";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import styles from "./UserList.module.css";
import { useCallback, useState } from "react";
import Avatar from "@/components/users/Avatar";
import LoadingModal from "@/components/users/LoadingModal";

interface UserBoxProps {
  data: User
}

const UserBox: React.FC<UserBoxProps> = ({
  data
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);

    axios.post('/api/conversations', { 
      userId: data.id
    })
    .then((data) => {
      router.push(`/conversations/${data.data.id}`);
    })
    .finally(() => setIsLoading(false));
  }, [data, router]);

  return (
    <>
      {isLoading && (
        <LoadingModal />
      )}
      <div
        onClick={handleClick}
        className={`
          w-full
          relative
          flex
          items-center
          space-x-3
          p-3
          my-1
          hover:bg-neutral-100
          rounded-lg
          transition
          cursor-pointer
          ${styles.bgPrattle} ${styles.bgPrattlehover}`}
      >
        <Avatar user={data} />
        <div className="min-w-0 flex-1">
          <div className="focus:outline-none">
            <div
              className="
                flex
                justify-between
                items-center
                mb-1
              "
            >
              <p 
                className="
                  text-sm
                  font-medium
                  text-white
                "
              >
                {data.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default UserBox;