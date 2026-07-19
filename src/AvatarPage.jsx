import { PlusIcon } from "lucide-react"

import {
    Avatar,
    AvatarBadge,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';

export function AvatarPage() {
    return (
        <Avatar className="grayscale size-20">
            <AvatarImage src="https://github.com/pranathip.png" alt="@pranathip" />
            <AvatarFallback>PP</AvatarFallback>
            <div className="flex justify-center items-end " style={{ color: 'darkblue' }}>
                <CreateRoundedIcon />
            </div>

        </Avatar >
    )
}
