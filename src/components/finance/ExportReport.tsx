import { useFinance } from '@/hooks/useFinance'
import { FileType } from '@/interfaces/finance'
import { exportReport } from '@/utils/exportReport'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'

export default function ExportReport() {
  const { financePlan, expenditures } = useFinance()
  return (
    <Menu>
      <MenuButton
        colorScheme="blue"
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        Export report
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => exportReport(financePlan, expenditures, FileType.CSV)}
        >
          Export as CSV
        </MenuItem>
        <MenuItem
          onClick={() => exportReport(financePlan, expenditures, FileType.CSV)}
        >
          Export as XLSX
        </MenuItem>
        <MenuItem
          onClick={() => exportReport(financePlan, expenditures, FileType.PDF)}
        >
          Export as PDF
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
