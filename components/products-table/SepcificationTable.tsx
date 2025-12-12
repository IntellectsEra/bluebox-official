import "./products.css";
import { SpecificationItem, SpecificationTableProps } from "@/types/product";

export default function SpecificationTable({
  specifications,
}: SpecificationTableProps) {
  return (
    <section className="pt-12 pb-12">
      <div className="container mx-auto px-4">
        <div className="section-inner max-w-5xl mx-auto">
          <div className="spec-table-wrapper">
            <table className="spec-table">
              <thead>
                <tr>
                  <th className="spec-header spec-header-left">
                    Specification
                  </th>
                  <th className="spec-header spec-header-right">Details</th>
                </tr>
              </thead>

              <tbody>
                {specifications.map((item, index) => (
                  <tr key={index} className="spec-row">
                    <td className="spec-cell spec-cell-left">{item.label}</td>
                    <td className="spec-cell spec-cell-right">
                      {item.values.map((value, i) => (
                        <div className="spec-value" key={i}>
                          {value}
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
