import { Accordion, AccordionDetails } from "@material-ui/core";
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';


const DetailAccordion = ({ summary, go, details, className, defaultExpanded }) => {
  return (
    <div className={className}>
      <Accordion defaultExpanded={defaultExpanded}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <p className="f14">{summary}</p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="w-100">
            {details.map((data, index) => {
              const objKey = Object.keys(data)[0];
              const objValue = data[Object.keys(data)[0]];

              return (
                <ListItemText
                  key={index}
                  primaryTypographyProps={{ style: { fontSize: 13 } }}
                >
                  {`${objKey}: ${objValue}`}
                </ListItemText>
              )

            })}
            <div className="flex justify-end items-center">
              <IconButton
                color="primary"
                component="span"
                onClick={() => go(`${summary.toLowerCase()}`)}
              >
                <EditIcon />
              </IconButton>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default DetailAccordion;