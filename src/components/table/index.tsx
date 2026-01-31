import type React from "react";

export interface ColumnDef<T> {
	header: string;
	accessorKey?: keyof T;
	cell?: (row: T) => React.ReactNode;
	className?: string;
	headerClassName?: string;
}

interface TableProps<T> {
	columns: ColumnDef<T>[];
	data: T[];
	emptyMessage?: string;
}

function Table<T extends Record<string, unknown>>({ 
	columns, 
	data,
	emptyMessage = "Nenhum dado disponível"
}: TableProps<T>) {
	return (
		<table className="w-full caption-bottom text-sm">
			<thead>
				<tr className="border-b transition-colors border-[var(--border)] hover:bg-[var(--muted)]/50">
					{columns.map((column, index) => (
						<th 
							key={`col-${column.header}-${index}`} 
							className={`h-10 px-2 text-align-middle font-medium whitespace-nowrap text-[var(--muted-foreground)] ${column.headerClassName || ''}`}
						>
							{column.header}
						</th>
					))}
				</tr>
			</thead>	
			<tbody>
				{data.length === 0 ? (
					<tr>
						<td 
							colSpan={columns.length} 
							className="p-8 text-center text-[var(--muted-foreground)]"
						>
							{emptyMessage}
						</td>
					</tr>
				) : (
					data.map((row, rowIndex) => (
						<tr 
							key={`row-${rowIndex}`} 
							className="border-b transition-colors border-[var(--border)] hover:bg-[var(--muted)]/50"
						>
							{columns.map((column, colIndex) => (
								<td 
									key={`cell-${rowIndex}-${colIndex}`} 
									className={`p-2 text-center whitespace-nowrap text-sm text-[var(--foreground)] ${column.className || ''}`}
								>
									{column.cell 
										? column.cell(row) 
										: column.accessorKey 
											? String(row[column.accessorKey]) 
											: null
									}
								</td>
							))}
						</tr>
					))
				)}
			</tbody>
		</table>
	)
}

export default Table;