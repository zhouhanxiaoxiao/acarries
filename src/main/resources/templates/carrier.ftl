<html>
<head>
    <meta http-equiv="content-type" content="text/html;charset=utif-8"/>
    <style>
        @page {
            size: 210mm 297mm;
        }
        @page {
            @top-center {content: element(header)}      /* Header */
            @bottom-center {content: element(footer)}   /* Enpied */
            margin-top:120px;
            margin-bottom:80px;
        }
        #header {position: running(header);}
        #footer {position: running(footer);font-size: 10px;height: 80px}
        #pagenumber:before {content: counter(page);}
        #pagecount:before {content: counter(pages);}
        table {
            margin: auto;
            /*border: 1px solid #333;*/
            border-bottom: none;
            border-left: none;
            page-break-inside: auto;
            -fs-table-paginate: paginate;
            border-spacing: 0;
            table-layout: fixed;
            word-break: break-all;
        }
        td {
            height: 30px;
            /*border: 1px solid #333;*/
            /*border-top: none;*/
            position: relative;
            padding-left: 10px;
        }
        tr{
            page-break-inside: avoid;
            page-break-after: auto;
        }
        tr.title {
            font-weight: bold;

        }
        td.title {
            height: 50px;
            font-weight: bold;
        }
    </style>
</head>
<body style="font-family:SimSun;font-size: 16px">
<div id="header">
    <img src="title.png" style="display: inline-block;width: 15%;height: 50px;margin-top: 20px;vertical-align: top;"></img>
    <h1 style="display: inline-block;width: 80%;text-align: center;vertical-align: top;">Vector Core 载体工程中心</h1>
    <hr/>
</div>
<div id="footer">
    <hr/>
    Head of Vector Core: Fei Zhao (PhD), zhaofei@cibr.ac.cn, 010-8191 2695, Office RM-1003
    Staffs: Leilei Yang yangleilei@cibr.ac.cn, Yingzi Ju juyingzi@cibr.ac.cn, Youtong Zhou zhouyoutong@cibr.ac.cn, Yaling Song songyaling@cibr.ac.cn, Yang Li liyang@cibr.ac.cn, 010-8191 2695, Office RM-1001
</div>
<h3 style="text-align: center;display: inline-block;width: 100%;">Plasmid information sheet 质粒信息表</h3>
<div style="width: 100%;text-align: left">
    <table style="width: 100%;text-align: left" border="1" cellspacing="0">
        <#list fixRow as fix>
            <tr>
                <td class="title" style="width: 30%">${(fix.title)!""}</td>
                <td style="width: 70%">${(fix.value)!""}</td>
            </tr>
        </#list>

<#--        <tr>-->
<#--            <td class="title" style="width: 30%">VC library # <br/>载体中心共享库编号</td>-->
<#--            <td style="width: 70%">${CAT}</td>-->
<#--        </tr>-->
<#--        <tr>-->
<#--            <td class="title" style="width: 30%">Other name <br/>别名</td>-->
<#--            <td style="width: 70%"></td>-->
<#--        </tr>-->
<#--        <tr>-->
<#--            <td class="title" style="width: 30%">Source <br/>来源</td>-->
<#--            <td style="width: 70%">${WHEREFROM来源}</td>-->
<#--        </tr>-->
<#--        <tr>-->
<#--            <td class="title" style="width: 30%">Addgene Cat.# <br/>Addgene编号</td>-->
<#--            <td style="width: 70%">${ADDGENE}</td>-->
<#--        </tr>-->
<#--        <tr>-->
<#--            <td class="title" style="width: 30%">Included time <br/>收录时间</td>-->
<#--            <td style="width: 70%">${PRESERVTIME保存时间}</td>-->
<#--        </tr>-->
<#--        <tr>-->
<#--            <td class="title" style="width: 30%">Purpose<br/>功能</td>-->
<#--            <td style="width: 70%">A single vector AAV-Cas9 system containing NLS-Cas9 from Staphylococcus aureus-->
<#--                (SaCas9) and its sgRNA.-->
<#--            </td>-->
<#--        </tr>-->
<#--        <tr>-->
<#--            <td class="title" style="width: 30%">Publication<br/>出版文献</td>-->
<#--            <td style="width: 70%">Ran et al Nature. 2015 Apr 1. doi: 10.1038/nature14299.</td>-->
<#--        </tr>-->
    </table>

    <table style="width: 100%;margin-top: 20px;text-align: left" border="1" cellspacing="0">
        <tr>
            <td colspan="4" style="background-color: #e0e0e0"><h4>Basic information 基本信息</h4></td>
        </tr>
        <#list activityRow as activity>
            <tr>
                <td class="title" style="width: 20%">${(activity.title1)!""}</td>
                <td style="width: 30%">${(activity.value1)!""}</td>
                <td class="title" style="width: 20%">${(activity.title2)!""}</td>
                <td style="width: 30%">${(activity.value2)!""}</td>
            </tr>
        </#list>
<#--        <tr>-->
<#--            <td class="title" style="width: 20%">Bacteria Resistance<br/>细菌抗性</td>-->
<#--            <td style="width: 30%">Ampicillin</td>-->
<#--            <td class="title" style="width: 20%">Species<br/>物种</td>-->
<#--            <td style="width: 30%">Staphylococcus aureus</td>-->
<#--        </tr>-->
<#--        <tr>-->
<#--            <td class="title" style="width: 20%">Eukarya Resistance<br/>真核抗性</td>-->
<#--            <td style="width: 30%">None</td>-->
<#--            <td class="title" style="width: 20%">Insert Size(bp) 1<br/>插入片段大小 1</td>-->
<#--            <td style="width: 30%">3345</td>-->
<#--        </tr>-->
<#--        <tr>-->
<#--            <td class="title" style="width: 20%">Growth Temp<br/>生长温度</td>-->
<#--            <td style="width: 30%">37°C</td>-->
<#--            <td class="title" style="width: 20%">Promoter 1<br/>启动子1</td>-->
<#--            <td style="width: 30%">Staphylococcus aureus</td>-->
<#--        </tr>-->
<#--        <tr>-->
<#--            <td class="title" style="width: 20%">Growth Strain(s)<br/>感受态细胞</td>-->
<#--            <td style="width: 30%">Stbl3</td>-->
<#--            <td class="title" style="width: 20%">Tags / Fusion Proteins 1<br/>标签/融合蛋白 1</td>-->
<#--            <td style="width: 30%">Staphylococcus aureus</td>-->
<#--        </tr>-->
<#--        <tr>-->
<#--            <td class="title" style="width: 20%"><br/></td>-->
<#--            <td style="width: 30%"></td>-->
<#--            <td class="title" style="width: 20%">Gene/Insert name 2<br/>基因/插入片段2</td>-->
<#--            <td style="width: 30%">Chimeric guide for SaCas9</td>-->
<#--        </tr>-->
<#--        <tr>-->
<#--            <td class="title" style="width: 20%"></td>-->
<#--            <td style="width: 30%"></td>-->
<#--            <td class="title" style="width: 20%">Insert Size(bp) 2<br/>插入片段大小 2</td>-->
<#--            <td style="width: 30%">3345</td>-->
<#--        </tr>-->
<#--        <tr>-->
<#--            <td class="title" style="width: 20%"></td>-->
<#--            <td style="width: 30%"></td>-->
<#--            <td class="title" style="width: 20%">Promoter 2<br/>启动子2</td>-->
<#--            <td style="width: 30%">Staphylococcus aureus</td>-->
<#--        </tr>-->
<#--        <tr>-->
<#--            <td class="title" style="width: 20%"></td>-->
<#--            <td style="width: 30%"></td>-->
<#--            <td class="title" style="width: 20%">Tags / Fusion Proteins 2<br/>标签/融合蛋白 2</td>-->
<#--            <td style="width: 30%">Staphylococcus aureus</td>-->
<#--        </tr>-->
    </table>

    <table style="width: 100%;margin-top: 20px;text-align: left" border="1" cellspacing="0">
        <tr>
            <td style="background-color: #e0e0e0;width: 100%"><h4>Map 质粒图谱</h4></td>
        </tr>
        <tr>
            <td style="width: 100%">
                <div style="width: 100%;text-align: center">
                    <img src="${tmpName}" style="height: auto;width:130%;max-height:100%;max-width:100%;"/>
                </div>
            </td>
        </tr>
        <tr>
            <td style="background-color: #e0e0e0;width: 100%"><h4>Additional information其他信息</h4></td>
        </tr>
        <tr>
            <td style="width: 100%">

            </td>
        </tr>
    </table>
</div>
</body>
</html>