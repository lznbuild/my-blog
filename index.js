

var initData = {
  nodes: [
    {
      shape: "graphNode",
      entId: "CaseGroup",
      entName: "专案",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseGroupId",
          displayName: "专案ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "caseGroupName",
          displayName: "专案标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseGroupDesc",
          displayName: "专案描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createDept",
          displayName: "立案部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "立案人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createTime",
          displayName: "立案时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      caseGroupName: "专案11-通天塔",
      uid: "200519254130000000",
      createDept: "200508439650000001",
      createTime: "1589890678000",
      caseGroupId: "200519254130000000",
      caseGroupDesc:
        "专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述专案情况描述",
      createUser: "",
      id: "CaseGroup-200519254130000000",
      gather: {
        total: null,
        items: null
      },
      label: "专案11-通天塔",
      icon: {
        show: true,
        img:
          "data:image/png;base64,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",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "CaseGroup",
      entName: "专案",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseGroupId",
          displayName: "专案ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "caseGroupName",
          displayName: "专案标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseGroupDesc",
          displayName: "专案描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createDept",
          displayName: "立案部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "立案人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createTime",
          displayName: "立案时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      caseGroupName: "专案11",
      uid: "200331171410000000",
      createDept: "200508439650000001",
      createTime: "1585637001000",
      caseGroupId: "200331171410000000",
      caseGroupDesc: "专案情况描述11",
      createUser: "",
      id: "CaseGroup-200331171410000000",
      gather: {
        total: 1,
        items: [
          {
            type: "Person",
            cnt: 1
          }
        ]
      },
      label: "专案11",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAACRxJREFUaN7tWXtUlVUW/+3vAoqgiAKCoCSGCkrABLaaaXD5SMNC8QFUwqSByuURopiPJDTRVNBEUe7Fhdr4QIG6igo6mZCsGITMEgUTiSBJuBfUJBCEe/b8UVIrIkguuWbN7D/Pd87+Pb7z7bXPd4D/x58bt1L2rgrPMjfXxCrswiaoVBqZYnW4TXa2JlapXHLAyurP5kO9DcDMDBBp0pQLwrPmzKHl8GOTXbv4M1Qi1cKincgwfIis2loehhNkFxJiXrbYYOdZlYqICGD+rzGAOYZjWJLq+1vduZ394osihRyFe0wMJvJaWvf0090mNg8FGFRczHdhh8j4ePPCQWNqFx06ROTrm56u1T52A+pP7QkPz7KxaftWjGMLNzfy53uonTQJGzAffb29EYkPoBo2TGfOvolypFVVwRPhmKdScSpCxds5OXqneZHw/+yzwc1yL8Wp6mqdGaBeqwgLXb1+PRwoA5GenrjF3hRhZER7kYAKW1s+i3142tBQZwJ7GDQFC3Dx/n1+HREYUVkJKzrGCY2NKOW5eC8722JtcOKujdHR3TZAY6g4EXohPZ0rUU0H5s593AIf2RhbWHNARob5/WCvXc/4+Pz6ufSnE3qH4mBfWSlVEmG+gwNZoYqOnT79uAzS05kwD36GP/bz40+kCzSp86rN0ViO64CZOfjBlfLy25myhj7JCxdqWQCnnn22S5wJ4hk+R8Tn6QJNPnq0p7x1tgPMSmtczEoyMpBLg8SEsrJOBewBsVV5eV2RaNUPmjZN6ybGcjeEi+fJlc+VlLTj6Ch0tgM0aRY+mnQ7O1os9pN7RARfx0Gcnz+/fYIBfPFUTU1rJaW1Fjk5GcTCp0+9gwOn8DGmgwe7yi+9L4yxaceOH3F27sRETNHF2+u5AZvxFhKKirhRf6rM+Ykn+GUsBA4dwtsAcOhQu4CrYi9Nq6wcmre4MHlPXZ3mQvIroUFFRURtQia5uXWJY4NP8DEAG5oEmJhgGaZqt125wvH4Fy0dN+7xGTAT1ogzMaEzIlAEdmx0hAdv1jru29eqlV4XGUKoPRQbQ99bsYIzRRHyAUAapR0B4J8UJpUKIVO0PAFvpbLZT6oXg/X19SP03kV+UFAHXGv0pzwTk57S77kBYxCCm6NGYQxuEDZtejhMU9gXF9essdwg/0jxb7Vao1EWh2oWLUIQVpJq5kzeC1fUODmhGG4oEUJKRiSfk8sHeVoOHKxsbtZ8VT+hfuaRI9DHMQz39PwN5Bso7zF73dWA9qjDWV7d0MA+tEPyMjPT+CqVobFBQfQJ3eeXL10afMx0qHpQSgpw1cMxjbl+6/At90cbGZlpAldsUTc0aIKVUtg3fn5wpEUwHjECr8JF5xx/ET2uI7QSr6J/fT05UyrHJyZSKYxREB9P7qjlwpIStgfzqGvX8L6sxfjba9ce9vK1ztaFdY4ODmJza1FjblhYndfu5rAZM2bQLb13+03LyrJYEqxIPOzgIAW2WqLK2prroYcquRzNtAoFeXm9bgBbYyo0LS1dJWBX9MMBExPpjoiSTA8cQAYWIiM3l6MRgXstLeQEpeQ8ebIobV3SuC0pSROmHBmW8M030lva8dJYd3daj0gpViYTKdJ+DD9+XExtXdbUdPu2equiKGx7To52i34dMGOG7E3hL3shJ4dmczOnymTdFdiVjs4/AX8sQ35FBYDfrbB0E45I+Oor7XiyYbPAQFT/1F8bArgMcDCbAgCGwpP6NzbyZbaFy5kz7K1XLJ3NzuabolibYWFBczkN6cOGAUjDLxpWOg7A1dVVQDqshasr+uFZ+u7KFcTTRkSYmiKKVyPBwaFTgq6cSslff40bf9AA8oeBVFxSwgDY9ncc1qAAr+XnG2SKI9qAlSu7eiMDB4aEJCXduYMpeOrn0dpa5hiO8ZDLv/9+SJI6pOvq/kBI2TL7rVvRBgCdG0Cm0utIuHoVAJD5G887W1h/ascL4VkDBohVBsd5fU3NI5/+cmCN6OpqKRB/o4tyOSbq7zFckpsr/JuLfohllhkbWMmMBw68N11vxz3Pujrj8pZlA2bMmsVmWMNe27bhAdJw2dLyj8KSMxrh0dREbvpt/dZYWpqdCFyx5XpDw6/ndVoDBr/4xumd0+/d448wHH85ebLbyEvRD+dKSmgkgRojIlpuNm3QL7e3b/uA/ehqRYUwabVq0isoQJDe8zLjIUMe/k8wimox6y/On+eL2iptQFFRS0rTdP1xdnbIYWtKCQ+nMdBD1ZdfdpcGb0cxNp440ZnwLg1on5AnrRLX4uKgRhLCOx5yaBT8edn+/eISfyDZOjlZHAz+R2LJ2LFCJf1Vqjt6tM9aw/gHNuvXS5+Sl+DPP8c2NGGSo2MHoBXYgAh3d9ojM5Aciov7NPRze3By9erWQO07Ijc11fx2cFBiposLVUivcMDo0ZiLNPgkJ3fI8xNPmiTGSx5xcV3ulO46qhmjfCnscEYGn+eXkD9nTnuCOdiLlooKvoU8qoiKIm+aiU+9vfEFD+JCHx8+DA8o+/btkHAkEU1/8kmOA9jCyYlmM2O/StVhngwOsPjhByjZlWKOHJE2UhtOZWbyfHLnsp07+W1ejjLbn6sUIwacnm4xJLg2cZevr+4M+Lti/Bsn7O2RD7UIuHSJb2El/I2Muru+t4OssAkHGxv5sNZNJLu4WPiFZuz2vXGjq3XdboTM84ILd3iVlYkrWAOPqKjHLbhD1FAzly1d2l3h7cY9Kp5mkVIKq/jwQ47l3dg6a9bj0k1rKATLVCrz5MUiccTs2X90/SO3ws2jG8fr35o3T9etabeFx1A0DhQUaOcYftc3OiDgkfP0lMjdu7t3y+Wmpq12koGsOieHr6ENw52de035AGxA8Bdf6PfpUyUbO3GiKS2gBLp791HT9fgw9LCz4yTtaeH/3HMPq7DOhQdSFvpnZso+fjCWqiZM6Knwh9ELN0M/XoXVFSpPhl6IjOQnMYDOrFsHLUqhNjbudqKfjtX0KS+n0pgYs6Dg8YmTt2/X9VVZr98N1p7dcznCa8gQaah4TRsfHMx2XIdWb29agCPY9nMPz/vwMpaWltIpTObrKpXWmKu1RgqF5TT5R4ppanVv8/yfjf8AevAJPLieG/AAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDM6MTgrMDg6MDCzGOsaAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQzOjE4KzA4OjAwwkVTpgAAAEh0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25fNTdycnJndGJoZC9hbmppYW4uc3Zn2jSFNQAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "CaseGroup",
      entName: "专案",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseGroupId",
          displayName: "专案ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "caseGroupName",
          displayName: "专案标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseGroupDesc",
          displayName: "专案描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createDept",
          displayName: "立案部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "立案人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createTime",
          displayName: "立案时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      caseGroupName: "test",
      uid: "200618602030000000",
      createDept: "200508439650000001",
      createTime: "1592464397000",
      caseGroupId: "200618602030000000",
      caseGroupDesc: "dssdssds",
      createUser: "admin",
      id: "CaseGroup-200618602030000000",
      gather: {
        total: null,
        items: null
      },
      label: "test",
      icon: {
        show: true,
        img:
          "data:image/png;base64,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",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "CaseGroup",
      entName: "专案",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseGroupId",
          displayName: "专案ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "caseGroupName",
          displayName: "专案标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseGroupDesc",
          displayName: "专案描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createDept",
          displayName: "立案部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "立案人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createTime",
          displayName: "立案时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      caseGroupName: "615测试转3-615转专案2-测试1-专案名称2-61502",
      uid: "200615162990000047",
      createDept: "200508439650000001",
      createTime: "1592268916000",
      caseGroupId: "200615162990000047",
      caseGroupDesc: "",
      createUser: "admin",
      id: "CaseGroup-200615162990000047",
      gather: {
        total: 1,
        items: [
          {
            type: "Person",
            cnt: 1
          }
        ]
      },
      label: "615测试转3-615转专案2-测试1-专案名称2-61502",
      icon: {
        show: true,
        img:
          "data:image/png;base64,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",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "张四五",
      uid: "123198199203241324",
      idcard: "123198199203241324",
      sex: "",
      nickname: "45",
      personId: "200430667640000023",
      id: "Person-123198199203241324",
      gather: {
        total: null,
        items: null
      },
      label: "张四五",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Clue",
      entName: "线索",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseId",
          displayName: "线索ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: false
        },
        {
          localName: "caseName",
          displayName: "线索标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseDesc",
          displayName: "线索描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "caseTime",
          displayName: "线索时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "createDept",
          displayName: "上报部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "上报人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      uid: "200514967000000009",
      createDept: "200508439650000001",
      caseId: "200514967000000009",
      caseTime: "1588262400000",
      caseName: "线索标题33333",
      createUser: "",
      id: "Clue-200514967000000009",
      gather: {
        total: null,
        items: null
      },
      caseDesc:
        "线索内容描述线索内容描述线索内容描述线索内容描述线索内容描述线索内容描述线索内容描述线索内容描述线索内容描述线索内容描述线索内容描述线索内容描述线索内容描述线索内容描述线索内容描述线索内容描述线索内容描述线索内容描述",
      label: "线索标题33333",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAg1JREFUOBGNU0FrE1EQnnlvbVrENtkigiePmhcRPChtRPQveJCiIM2pKliyiUSsCmsvVbA1IEVvgh7Tg3+gePGgh1xst/4BqYjuvkRSlZbdcV7bLC9BJQPLvPnmm3nfzs6i8mkI2vohEV1DBAGAr2Esdz/wcRsGMIeL5wlgCoWcRSRKElrCtjaltQHqAfNeuIkkZ4N6dsUUFKr6EsX0wkG6aDdIMnJz7VF2t7ONs+ReI2IdQId3CNbtJ/6dhMqLFnrZ/MKqEj2GBKYARHUvmSwS0htHunM2OU5aZyihVZRwPlh033VzDozmHvAcECB+xv2GgOjVyHG31pzBnS5p379VXtgEwiLHaYM+zr/DCz45+XL0Pe/pks1y7KAw1zlCv7ZL/DmP2rg5f2vr04z/hLFsw86x9D0769Nop6XXAOgrIGx08dQTfh6GzHKzfvBLivEhVbD1Q1/l4R1QE+5E4zLGNul/57QBb6KRvfG3Ys5hoRL5PMAbrE4yb4W3tcrb2kn3ABE/MOHcKS9U/TcWKvoOEMygoFsg6AoRTEJLLxteOgMTqHL4ktd6mmF2thEKgTfXl9znBlXlqMiE1ZETuUOpApMI6uOljBTHpENF++FbPvGtRvquCcnrtG89Crpgv1ee9ngO91DgbdbW5l9ugbW/D56OTw/UwAzxZEXfZdnXeRbDXNyQMlf7+AS3/gCLBdBFdU/VjgAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "CaseGroup",
      entName: "专案",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseGroupId",
          displayName: "专案ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "caseGroupName",
          displayName: "专案标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseGroupDesc",
          displayName: "专案描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createDept",
          displayName: "立案部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "立案人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createTime",
          displayName: "立案时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      caseGroupName: "专案11-通天塔-55",
      uid: "200522940540000036",
      createDept: "200508439650000001",
      createTime: "1590496423000",
      caseGroupId: "200522940540000036",
      caseGroupDesc: "",
      createUser: "",
      id: "CaseGroup-200522940540000036",
      gather: {
        total: null,
        items: null
      },
      label: "专案11-通天塔-55",
      icon: {
        show: true,
        img:
          "data:image/png;base64,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",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "QQ",
      uid: "Q",
      sex: "",
      idcard: "Q",
      nickname: "Q",
      personId: "200410930960000006",
      id: "Person-Q",
      gather: {
        total: null,
        items: null
      },
      label: "QQ",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Clue",
      entName: "线索",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseId",
          displayName: "线索ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: false
        },
        {
          localName: "caseName",
          displayName: "线索标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseDesc",
          displayName: "线索描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "caseTime",
          displayName: "线索时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "createDept",
          displayName: "上报部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "上报人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      uid: "200602750040000005",
      createDept: "200508439650000001",
      caseId: "200602750040000005",
      caseTime: "1593446400000",
      caseName: "标题R",
      createUser: "admin",
      id: "Clue-200602750040000005",
      gather: {
        total: null,
        items: null
      },
      caseDesc: "线索内容描述RRRRRR",
      label: "标题R",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAg1JREFUOBGNU0FrE1EQnnlvbVrENtkigiePmhcRPChtRPQveJCiIM2pKliyiUSsCmsvVbA1IEVvgh7Tg3+gePGgh1xst/4BqYjuvkRSlZbdcV7bLC9BJQPLvPnmm3nfzs6i8mkI2vohEV1DBAGAr2Esdz/wcRsGMIeL5wlgCoWcRSRKElrCtjaltQHqAfNeuIkkZ4N6dsUUFKr6EsX0wkG6aDdIMnJz7VF2t7ONs+ReI2IdQId3CNbtJ/6dhMqLFnrZ/MKqEj2GBKYARHUvmSwS0htHunM2OU5aZyihVZRwPlh033VzDozmHvAcECB+xv2GgOjVyHG31pzBnS5p379VXtgEwiLHaYM+zr/DCz45+XL0Pe/pks1y7KAw1zlCv7ZL/DmP2rg5f2vr04z/hLFsw86x9D0769Nop6XXAOgrIGx08dQTfh6GzHKzfvBLivEhVbD1Q1/l4R1QE+5E4zLGNul/57QBb6KRvfG3Ys5hoRL5PMAbrE4yb4W3tcrb2kn3ABE/MOHcKS9U/TcWKvoOEMygoFsg6AoRTEJLLxteOgMTqHL4ktd6mmF2thEKgTfXl9znBlXlqMiE1ZETuUOpApMI6uOljBTHpENF++FbPvGtRvquCcnrtG89Crpgv1ee9ngO91DgbdbW5l9ugbW/D56OTw/UwAzxZEXfZdnXeRbDXNyQMlf7+AS3/gCLBdBFdU/VjgAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Clue",
      entName: "线索",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseId",
          displayName: "线索ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: false
        },
        {
          localName: "caseName",
          displayName: "线索标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseDesc",
          displayName: "线索描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "caseTime",
          displayName: "线索时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "createDept",
          displayName: "上报部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "上报人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      uid: "200527270830000007",
      createDept: "200508439650000001",
      caseId: "200527270830000007",
      caseTime: "1591027200000",
      caseName: "888888888",
      createUser: "admin",
      id: "Clue-200527270830000007",
      gather: {
        total: 15,
        items: [
          {
            type: "Person",
            cnt: 15
          }
        ]
      },
      caseDesc: "线索内容描888888",
      label: "888888888",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAg1JREFUOBGNU0FrE1EQnnlvbVrENtkigiePmhcRPChtRPQveJCiIM2pKliyiUSsCmsvVbA1IEVvgh7Tg3+gePGgh1xst/4BqYjuvkRSlZbdcV7bLC9BJQPLvPnmm3nfzs6i8mkI2vohEV1DBAGAr2Esdz/wcRsGMIeL5wlgCoWcRSRKElrCtjaltQHqAfNeuIkkZ4N6dsUUFKr6EsX0wkG6aDdIMnJz7VF2t7ONs+ReI2IdQId3CNbtJ/6dhMqLFnrZ/MKqEj2GBKYARHUvmSwS0htHunM2OU5aZyihVZRwPlh033VzDozmHvAcECB+xv2GgOjVyHG31pzBnS5p379VXtgEwiLHaYM+zr/DCz45+XL0Pe/pks1y7KAw1zlCv7ZL/DmP2rg5f2vr04z/hLFsw86x9D0769Nop6XXAOgrIGx08dQTfh6GzHKzfvBLivEhVbD1Q1/l4R1QE+5E4zLGNul/57QBb6KRvfG3Ys5hoRL5PMAbrE4yb4W3tcrb2kn3ABE/MOHcKS9U/TcWKvoOEMygoFsg6AoRTEJLLxteOgMTqHL4ktd6mmF2thEKgTfXl9znBlXlqMiE1ZETuUOpApMI6uOljBTHpENF++FbPvGtRvquCcnrtG89Crpgv1ee9ngO91DgbdbW5l9ugbW/D56OTw/UwAzxZEXfZdnXeRbDXNyQMlf7+AS3/gCLBdBFdU/VjgAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "SSS",
      uid: "SSS",
      sex: "",
      idcard: "",
      nickname: "",
      personId: "200507575500000024",
      id: "Person-SSS",
      gather: {
        total: null,
        items: null
      },
      label: "SSS",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "测试赛ss",
      uid: "测试赛ss",
      idcard: "",
      sex: "",
      nickname: "",
      personId: "200529848480000073",
      id: "Person-测试赛ss",
      gather: {
        total: null,
        items: null
      },
      label: "测试赛ss",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Clue",
      entName: "线索",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseId",
          displayName: "线索ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: false
        },
        {
          localName: "caseName",
          displayName: "线索标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseDesc",
          displayName: "线索描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "caseTime",
          displayName: "线索时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "createDept",
          displayName: "上报部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "上报人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      uid: "200602902690000003",
      createDept: "200508439650000001",
      caseId: "200602902690000003",
      caseTime: "1591027200000",
      caseName: "标题标题标题标题标题dsss",
      createUser: "admin",
      id: "Clue-200602902690000003",
      gather: {
        total: null,
        items: null
      },
      caseDesc: "sddddddddddd",
      label: "标题标题标题标题标题dsss",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAg1JREFUOBGNU0FrE1EQnnlvbVrENtkigiePmhcRPChtRPQveJCiIM2pKliyiUSsCmsvVbA1IEVvgh7Tg3+gePGgh1xst/4BqYjuvkRSlZbdcV7bLC9BJQPLvPnmm3nfzs6i8mkI2vohEV1DBAGAr2Esdz/wcRsGMIeL5wlgCoWcRSRKElrCtjaltQHqAfNeuIkkZ4N6dsUUFKr6EsX0wkG6aDdIMnJz7VF2t7ONs+ReI2IdQId3CNbtJ/6dhMqLFnrZ/MKqEj2GBKYARHUvmSwS0htHunM2OU5aZyihVZRwPlh033VzDozmHvAcECB+xv2GgOjVyHG31pzBnS5p379VXtgEwiLHaYM+zr/DCz45+XL0Pe/pks1y7KAw1zlCv7ZL/DmP2rg5f2vr04z/hLFsw86x9D0769Nop6XXAOgrIGx08dQTfh6GzHKzfvBLivEhVbD1Q1/l4R1QE+5E4zLGNul/57QBb6KRvfG3Ys5hoRL5PMAbrE4yb4W3tcrb2kn3ABE/MOHcKS9U/TcWKvoOEMygoFsg6AoRTEJLLxteOgMTqHL4ktd6mmF2thEKgTfXl9znBlXlqMiE1ZETuUOpApMI6uOljBTHpENF++FbPvGtRvquCcnrtG89Crpgv1ee9ngO91DgbdbW5l9ugbW/D56OTw/UwAzxZEXfZdnXeRbDXNyQMlf7+AS3/gCLBdBFdU/VjgAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "最新测试人",
      uid: "最新测试人",
      idcard: "",
      sex: "",
      nickname: "",
      personId: "200529848480000002",
      id: "Person-最新测试人",
      gather: {
        total: null,
        items: null
      },
      label: "最新测试人",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "7890",
      uid: "4***83****10*****5",
      idcard: "4***83****10*****5",
      sex: "男",
      nickname: "绰号7890",
      personId: "200514967000000012",
      id: "Person-4***83****10*****5",
      gather: {
        total: null,
        items: null
      },
      label: "7890",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "FE",
      uid: "FE",
      sex: "",
      idcard: "",
      nickname: "",
      personId: "200605563240000021",
      id: "Person-FE",
      gather: {
        total: null,
        items: null
      },
      label: "FE",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "CaseGroup",
      entName: "专案",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseGroupId",
          displayName: "专案ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "caseGroupName",
          displayName: "专案标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseGroupDesc",
          displayName: "专案描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createDept",
          displayName: "立案部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "立案人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createTime",
          displayName: "立案时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      caseGroupName: "测试1234",
      uid: "200701658160000058",
      createDept: "200508439650000001",
      createTime: "1594091711000",
      caseGroupId: "200701658160000058",
      caseGroupDesc: "",
      createUser: "admin",
      id: "CaseGroup-200701658160000058",
      gather: {
        total: null,
        items: null
      },
      label: "测试1234",
      icon: {
        show: true,
        img:
          "data:image/png;base64,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",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "CaseGroup",
      entName: "专案",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseGroupId",
          displayName: "专案ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "caseGroupName",
          displayName: "专案标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseGroupDesc",
          displayName: "专案描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createDept",
          displayName: "立案部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "立案人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createTime",
          displayName: "立案时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      caseGroupName: "615测试转3-615转专案2",
      uid: "200615162990000010",
      createDept: "200508439650000001",
      createTime: "1592227350000",
      caseGroupId: "200615162990000010",
      caseGroupDesc: "",
      createUser: "admin",
      id: "CaseGroup-200615162990000010",
      gather: {
        total: null,
        items: null
      },
      label: "615测试转3-615转专案2",
      icon: {
        show: true,
        img:
          "data:image/png;base64,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",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "ddddddd",
      uid: "ddddddd",
      idcard: "",
      sex: "",
      nickname: "",
      personId: "200409829970000001",
      id: "Person-ddddddd",
      gather: {
        total: null,
        items: null
      },
      label: "ddddddd",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "qqq",
      uid: "qqq",
      sex: "女",
      idcard: "qqq",
      nickname: "qqq",
      personId: "200410333960000000",
      id: "Person-qqq",
      gather: {
        total: null,
        items: null
      },
      label: "qqq",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "B",
      uid: "B",
      sex: "",
      idcard: "B",
      nickname: "B",
      personId: "200410930960000002",
      id: "Person-B",
      gather: {
        total: null,
        items: null
      },
      label: "B",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "爪八",
      uid: "爪八",
      idcard: "",
      sex: "",
      nickname: "",
      personId: "200421743460000008",
      id: "Person-爪八",
      gather: {
        total: null,
        items: null
      },
      label: "爪八",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "张三丰123",
      uid: "张三丰123",
      idcard: "",
      sex: "",
      nickname: "",
      personId: "200416220680000002",
      id: "Person-张三丰123",
      gather: {
        total: null,
        items: null
      },
      label: "张三丰123",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "66666",
      uid: "210",
      sex: "",
      idcard: "210",
      nickname: "",
      personId: "200417524640000000",
      id: "Person-210",
      gather: {
        total: null,
        items: null
      },
      label: "66666",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "赵柳",
      uid: "66",
      sex: "男",
      idcard: "66",
      nickname: "z6",
      personId: "200421743460000002",
      id: "Person-66",
      gather: {
        total: null,
        items: null
      },
      label: "赵柳",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Clue",
      entName: "线索",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseId",
          displayName: "线索ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: false
        },
        {
          localName: "caseName",
          displayName: "线索标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseDesc",
          displayName: "线索描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "caseTime",
          displayName: "线索时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "createDept",
          displayName: "上报部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "上报人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      uid: "200602873020000001",
      createDept: "200508439650000001",
      caseId: "200602873020000001",
      caseTime: "1591632000000",
      caseName: "标题标题标题标题标题中心小学寻寻寻",
      createUser: "admin",
      id: "Clue-200602873020000001",
      gather: {
        total: 1,
        items: [
          {
            type: "Person",
            cnt: 1
          }
        ]
      },
      caseDesc:
        "中心小学寻rr线索内容描述线索内容描述线索内容描述线索内容描述中心小学寻rr线索内容描述线索内容描述线索内容描述线索内容描述中心小学寻rr线索内容描述线索内容描述线索内容描述线索内容描述中心小学寻rr线索内容描述线索内容描述线索内容描述线索内容描述中心小学寻rr线索内容描述线索内容描述线索内容描述线索内容描述中心小学寻rr线索内容描述线索内容描述线索内容描述线索内容描述中心小学寻rr线索内容描述线索内容描述线索内容描述线索内容描述中心小学寻rr线索内容描述线索内容描述线索内容描述线索内容描述中心小学寻rr线索内容描述线索内容描述线索内容描述线索内容描述中心小学寻rr线索内容描述线索内容描述线索内容描述线索内容描述中心小学寻rr线索内容描述线索内容描述线索内容描述线索内容描述中心小学寻rr线索内容描述线索内容描述线索内容描述线索内容描述中心小学寻rr线索内容描述线索内容描述线索内容描述线索内容描述中心小学寻rr线索内容描述线索内容描述线索内容描述线索内容描述中心小学寻rr线索内容描述线索内容描述线索内容描述线索内容描述中心小学寻rr线索内容描述线索内容描述线索内容描述线索内容描述中心小学寻rr线索内容描述线索内容描述线索内容描述线索内容描述中心小学寻rr线索内容描述线索内容描述线索内容描述线索内容描述中心小学寻rr线索内容描述线索内容描述线索内容描述线索内容描述中心小学寻rr线索内容描述线索内容描述线索内容描述线索内容描述",
      label: "标题标题标题标题标题中心小学寻寻寻",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAg1JREFUOBGNU0FrE1EQnnlvbVrENtkigiePmhcRPChtRPQveJCiIM2pKliyiUSsCmsvVbA1IEVvgh7Tg3+gePGgh1xst/4BqYjuvkRSlZbdcV7bLC9BJQPLvPnmm3nfzs6i8mkI2vohEV1DBAGAr2Esdz/wcRsGMIeL5wlgCoWcRSRKElrCtjaltQHqAfNeuIkkZ4N6dsUUFKr6EsX0wkG6aDdIMnJz7VF2t7ONs+ReI2IdQId3CNbtJ/6dhMqLFnrZ/MKqEj2GBKYARHUvmSwS0htHunM2OU5aZyihVZRwPlh033VzDozmHvAcECB+xv2GgOjVyHG31pzBnS5p379VXtgEwiLHaYM+zr/DCz45+XL0Pe/pks1y7KAw1zlCv7ZL/DmP2rg5f2vr04z/hLFsw86x9D0769Nop6XXAOgrIGx08dQTfh6GzHKzfvBLivEhVbD1Q1/l4R1QE+5E4zLGNul/57QBb6KRvfG3Ys5hoRL5PMAbrE4yb4W3tcrb2kn3ABE/MOHcKS9U/TcWKvoOEMygoFsg6AoRTEJLLxteOgMTqHL4ktd6mmF2thEKgTfXl9znBlXlqMiE1ZETuUOpApMI6uOljBTHpENF++FbPvGtRvquCcnrtG89Crpgv1ee9ngO91DgbdbW5l9ugbW/D56OTw/UwAzxZEXfZdnXeRbDXNyQMlf7+AS3/gCLBdBFdU/VjgAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "xcxccx",
      uid: "444444444444",
      idcard: "444444444444",
      sex: "",
      nickname: "444",
      personId: "200424892430000000",
      id: "Person-444444444444",
      gather: {
        total: 1,
        items: [
          {
            type: "CaseGroup",
            cnt: 1
          }
        ]
      },
      label: "xcxccx",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "aaaaaaa",
      uid: "aaaaaaa",
      idcard: "",
      sex: "",
      nickname: "",
      personId: "200619441600000000",
      id: "Person-aaaaaaa",
      gather: {
        total: null,
        items: null
      },
      label: "aaaaaaa",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "CaseGroup",
      entName: "专案",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseGroupId",
          displayName: "专案ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "caseGroupName",
          displayName: "专案标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseGroupDesc",
          displayName: "专案描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createDept",
          displayName: "立案部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "立案人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createTime",
          displayName: "立案时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      caseGroupName: "热热热",
      uid: "200514604280000000",
      createDept: "200508439650000001",
      createTime: "1589421933000",
      caseGroupId: "200514604280000000",
      caseGroupDesc: "",
      createUser: "",
      id: "CaseGroup-200514604280000000",
      gather: {
        total: 1,
        items: [
          {
            type: "Person",
            cnt: 1
          }
        ]
      },
      label: "热热热",
      icon: {
        show: true,
        img:
          "data:image/png;base64,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",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "CaseGroup",
      entName: "专案",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseGroupId",
          displayName: "专案ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "caseGroupName",
          displayName: "专案标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseGroupDesc",
          displayName: "专案描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createDept",
          displayName: "立案部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "立案人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createTime",
          displayName: "立案时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      caseGroupName: "999999999-121222222",
      uid: "200701658160000011",
      createDept: "200508439650000001",
      createTime: "1594091548000",
      caseGroupId: "200701658160000011",
      caseGroupDesc: "专案情况描述999999；null",
      createUser: "admin",
      id: "CaseGroup-200701658160000011",
      gather: {
        total: null,
        items: null
      },
      label: "999999999-121222222",
      icon: {
        show: true,
        img:
          "data:image/png;base64,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",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "QQQQQQ",
      uid: "QWQWQ",
      idcard: "QWQWQ",
      sex: "",
      nickname: "绰号",
      personId: "200422780520000000",
      id: "Person-QWQWQ",
      gather: {
        total: null,
        items: null
      },
      label: "QQQQQQ",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "EE",
      uid: "EE",
      sex: "",
      idcard: "",
      nickname: "EE",
      personId: "200410930960000008",
      id: "Person-EE",
      gather: {
        total: null,
        items: null
      },
      label: "EE",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "888",
      uid: "331023199610124777",
      idcard: "331023199610124777",
      sex: "",
      nickname: "888",
      personId: "200421110250000000",
      id: "Person-331023199610124777",
      gather: {
        total: null,
        items: null
      },
      label: "888",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Clue",
      entName: "线索",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseId",
          displayName: "线索ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: false
        },
        {
          localName: "caseName",
          displayName: "线索标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseDesc",
          displayName: "线索描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "caseTime",
          displayName: "线索时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "createDept",
          displayName: "上报部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "上报人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      uid: "200426000860000006",
      createDept: "200508439650000001",
      caseId: "200426000860000006",
      caseTime: "1586188800000",
      caseName: "线索2",
      createUser: "",
      id: "Clue-200426000860000006",
      gather: {
        total: null,
        items: null
      },
      caseDesc: "活动内容描述",
      label: "线索2",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAg1JREFUOBGNU0FrE1EQnnlvbVrENtkigiePmhcRPChtRPQveJCiIM2pKliyiUSsCmsvVbA1IEVvgh7Tg3+gePGgh1xst/4BqYjuvkRSlZbdcV7bLC9BJQPLvPnmm3nfzs6i8mkI2vohEV1DBAGAr2Esdz/wcRsGMIeL5wlgCoWcRSRKElrCtjaltQHqAfNeuIkkZ4N6dsUUFKr6EsX0wkG6aDdIMnJz7VF2t7ONs+ReI2IdQId3CNbtJ/6dhMqLFnrZ/MKqEj2GBKYARHUvmSwS0htHunM2OU5aZyihVZRwPlh033VzDozmHvAcECB+xv2GgOjVyHG31pzBnS5p379VXtgEwiLHaYM+zr/DCz45+XL0Pe/pks1y7KAw1zlCv7ZL/DmP2rg5f2vr04z/hLFsw86x9D0769Nop6XXAOgrIGx08dQTfh6GzHKzfvBLivEhVbD1Q1/l4R1QE+5E4zLGNul/57QBb6KRvfG3Ys5hoRL5PMAbrE4yb4W3tcrb2kn3ABE/MOHcKS9U/TcWKvoOEMygoFsg6AoRTEJLLxteOgMTqHL4ktd6mmF2thEKgTfXl9znBlXlqMiE1ZETuUOpApMI6uOljBTHpENF++FbPvGtRvquCcnrtG89Crpgv1ee9ngO91DgbdbW5l9ugbW/D56OTw/UwAzxZEXfZdnXeRbDXNyQMlf7+AS3/gCLBdBFdU/VjgAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "CaseGroup",
      entName: "专案",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseGroupId",
          displayName: "专案ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "caseGroupName",
          displayName: "专案标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseGroupDesc",
          displayName: "专案描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createDept",
          displayName: "立案部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "立案人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createTime",
          displayName: "立案时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      caseGroupName: "转测试",
      uid: "200701658160000002",
      createDept: "200508439650000001",
      createTime: "1594091493000",
      caseGroupId: "200701658160000002",
      caseGroupDesc: "",
      createUser: "admin",
      id: "CaseGroup-200701658160000002",
      gather: {
        total: null,
        items: null
      },
      label: "转测试",
      icon: {
        show: true,
        img:
          "data:image/png;base64,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",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "xcxc123",
      uid: "xcxcxc",
      idcard: "xcxcxc",
      sex: "",
      nickname: "xcxcwwwwww",
      personId: "200415351070000004",
      id: "Person-xcxcxc",
      gather: {
        total: null,
        items: null
      },
      label: "xcxc123",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "123",
      uid: "123",
      sex: "",
      idcard: "",
      nickname: "",
      personId: "200420375630000006",
      id: "Person-123",
      gather: {
        total: null,
        items: null
      },
      label: "123",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Clue",
      entName: "线索",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseId",
          displayName: "线索ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: false
        },
        {
          localName: "caseName",
          displayName: "线索标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseDesc",
          displayName: "线索描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "caseTime",
          displayName: "线索时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "createDept",
          displayName: "上报部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "上报人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      uid: "200527748700000000",
      createDept: "200508439650000001",
      caseId: "200527748700000000",
      caseTime: "1590508800000",
      caseName: "we标题标题标题标题标题",
      createUser: "admin",
      id: "Clue-200527748700000000",
      gather: {
        total: null,
        items: null
      },
      caseDesc: "sdsssssssssssss",
      label: "we标题标题标题标题标题",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAg1JREFUOBGNU0FrE1EQnnlvbVrENtkigiePmhcRPChtRPQveJCiIM2pKliyiUSsCmsvVbA1IEVvgh7Tg3+gePGgh1xst/4BqYjuvkRSlZbdcV7bLC9BJQPLvPnmm3nfzs6i8mkI2vohEV1DBAGAr2Esdz/wcRsGMIeL5wlgCoWcRSRKElrCtjaltQHqAfNeuIkkZ4N6dsUUFKr6EsX0wkG6aDdIMnJz7VF2t7ONs+ReI2IdQId3CNbtJ/6dhMqLFnrZ/MKqEj2GBKYARHUvmSwS0htHunM2OU5aZyihVZRwPlh033VzDozmHvAcECB+xv2GgOjVyHG31pzBnS5p379VXtgEwiLHaYM+zr/DCz45+XL0Pe/pks1y7KAw1zlCv7ZL/DmP2rg5f2vr04z/hLFsw86x9D0769Nop6XXAOgrIGx08dQTfh6GzHKzfvBLivEhVbD1Q1/l4R1QE+5E4zLGNul/57QBb6KRvfG3Ys5hoRL5PMAbrE4yb4W3tcrb2kn3ABE/MOHcKS9U/TcWKvoOEMygoFsg6AoRTEJLLxteOgMTqHL4ktd6mmF2thEKgTfXl9znBlXlqMiE1ZETuUOpApMI6uOljBTHpENF++FbPvGtRvquCcnrtG89Crpgv1ee9ngO91DgbdbW5l9ugbW/D56OTw/UwAzxZEXfZdnXeRbDXNyQMlf7+AS3/gCLBdBFdU/VjgAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "叶铿",
      uid: "331023199610124637",
      idcard: "331023199610124637",
      sex: "男",
      nickname: "11QW",
      personId: "200401444590000001",
      id: "Person-331023199610124637",
      gather: {
        total: 2,
        items: [
          {
            type: "Clue",
            cnt: 2
          }
        ]
      },
      label: "叶铿",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "ssdd",
      uid: "ssdd",
      idcard: "",
      sex: "",
      nickname: "4444444444",
      personId: "200421743460000012",
      id: "Person-ssdd",
      gather: {
        total: null,
        items: null
      },
      label: "ssdd",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "sssssssssssssssssss",
      uid: "ssssssss",
      idcard: "ssssssss",
      sex: "",
      nickname: "",
      personId: "200428724440000019",
      id: "Person-ssssssss",
      gather: {
        total: null,
        items: null
      },
      label: "sssssssssssssssssss",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "小张子",
      uid: "1",
      sex: "女",
      idcard: "1",
      nickname: "1",
      personId: "200401522970000000",
      id: "Person-1",
      gather: {
        total: 1,
        items: [
          {
            type: "CaseGroup",
            cnt: 1
          }
        ]
      },
      label: "小张子",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Clue",
      entName: "线索",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseId",
          displayName: "线索ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: false
        },
        {
          localName: "caseName",
          displayName: "线索标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseDesc",
          displayName: "线索描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "caseTime",
          displayName: "线索时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "createDept",
          displayName: "上报部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "上报人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      uid: "200602750040000000",
      createDept: "200508439650000001",
      caseId: "200602750040000000",
      caseTime: "1591027200000",
      caseName: "YYYYY",
      createUser: "admin",
      id: "Clue-200602750040000000",
      gather: {
        total: null,
        items: null
      },
      caseDesc: "线索内容描YYYYYY",
      label: "YYYYY",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAg1JREFUOBGNU0FrE1EQnnlvbVrENtkigiePmhcRPChtRPQveJCiIM2pKliyiUSsCmsvVbA1IEVvgh7Tg3+gePGgh1xst/4BqYjuvkRSlZbdcV7bLC9BJQPLvPnmm3nfzs6i8mkI2vohEV1DBAGAr2Esdz/wcRsGMIeL5wlgCoWcRSRKElrCtjaltQHqAfNeuIkkZ4N6dsUUFKr6EsX0wkG6aDdIMnJz7VF2t7ONs+ReI2IdQId3CNbtJ/6dhMqLFnrZ/MKqEj2GBKYARHUvmSwS0htHunM2OU5aZyihVZRwPlh033VzDozmHvAcECB+xv2GgOjVyHG31pzBnS5p379VXtgEwiLHaYM+zr/DCz45+XL0Pe/pks1y7KAw1zlCv7ZL/DmP2rg5f2vr04z/hLFsw86x9D0769Nop6XXAOgrIGx08dQTfh6GzHKzfvBLivEhVbD1Q1/l4R1QE+5E4zLGNul/57QBb6KRvfG3Ys5hoRL5PMAbrE4yb4W3tcrb2kn3ABE/MOHcKS9U/TcWKvoOEMygoFsg6AoRTEJLLxteOgMTqHL4ktd6mmF2thEKgTfXl9znBlXlqMiE1ZETuUOpApMI6uOljBTHpENF++FbPvGtRvquCcnrtG89Crpgv1ee9ngO91DgbdbW5l9ugbW/D56OTw/UwAzxZEXfZdnXeRbDXNyQMlf7+AS3/gCLBdBFdU/VjgAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "测试测试1111111",
      uid: "测试测试1111111",
      idcard: "",
      sex: "",
      nickname: "1",
      personId: "200529848480000058",
      id: "Person-测试测试1111111",
      gather: {
        total: null,
        items: null
      },
      label: "测试测试1111111",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "CaseGroup",
      entName: "专案",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseGroupId",
          displayName: "专案ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "caseGroupName",
          displayName: "专案标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseGroupDesc",
          displayName: "专案描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createDept",
          displayName: "立案部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "立案人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createTime",
          displayName: "立案时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      caseGroupName: "cessssss",
      uid: "200527748700000002",
      createDept: "200508439650000001",
      createTime: "1590549384000",
      caseGroupId: "200527748700000002",
      caseGroupDesc: "",
      createUser: "admin",
      id: "CaseGroup-200527748700000002",
      gather: {
        total: null,
        items: null
      },
      label: "cessssss",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAACRxJREFUaN7tWXtUlVUW/+3vAoqgiAKCoCSGCkrABLaaaXD5SMNC8QFUwqSByuURopiPJDTRVNBEUe7Fhdr4QIG6igo6mZCsGITMEgUTiSBJuBfUJBCEe/b8UVIrIkguuWbN7D/Pd87+Pb7z7bXPd4D/x58bt1L2rgrPMjfXxCrswiaoVBqZYnW4TXa2JlapXHLAyurP5kO9DcDMDBBp0pQLwrPmzKHl8GOTXbv4M1Qi1cKincgwfIis2loehhNkFxJiXrbYYOdZlYqICGD+rzGAOYZjWJLq+1vduZ394osihRyFe0wMJvJaWvf0090mNg8FGFRczHdhh8j4ePPCQWNqFx06ROTrm56u1T52A+pP7QkPz7KxaftWjGMLNzfy53uonTQJGzAffb29EYkPoBo2TGfOvolypFVVwRPhmKdScSpCxds5OXqneZHw/+yzwc1yL8Wp6mqdGaBeqwgLXb1+PRwoA5GenrjF3hRhZER7kYAKW1s+i3142tBQZwJ7GDQFC3Dx/n1+HREYUVkJKzrGCY2NKOW5eC8722JtcOKujdHR3TZAY6g4EXohPZ0rUU0H5s593AIf2RhbWHNARob5/WCvXc/4+Pz6ufSnE3qH4mBfWSlVEmG+gwNZoYqOnT79uAzS05kwD36GP/bz40+kCzSp86rN0ViO64CZOfjBlfLy25myhj7JCxdqWQCnnn22S5wJ4hk+R8Tn6QJNPnq0p7x1tgPMSmtczEoyMpBLg8SEsrJOBewBsVV5eV2RaNUPmjZN6ybGcjeEi+fJlc+VlLTj6Ch0tgM0aRY+mnQ7O1os9pN7RARfx0Gcnz+/fYIBfPFUTU1rJaW1Fjk5GcTCp0+9gwOn8DGmgwe7yi+9L4yxaceOH3F27sRETNHF2+u5AZvxFhKKirhRf6rM+Ykn+GUsBA4dwtsAcOhQu4CrYi9Nq6wcmre4MHlPXZ3mQvIroUFFRURtQia5uXWJY4NP8DEAG5oEmJhgGaZqt125wvH4Fy0dN+7xGTAT1ogzMaEzIlAEdmx0hAdv1jru29eqlV4XGUKoPRQbQ99bsYIzRRHyAUAapR0B4J8UJpUKIVO0PAFvpbLZT6oXg/X19SP03kV+UFAHXGv0pzwTk57S77kBYxCCm6NGYQxuEDZtejhMU9gXF9essdwg/0jxb7Vao1EWh2oWLUIQVpJq5kzeC1fUODmhGG4oEUJKRiSfk8sHeVoOHKxsbtZ8VT+hfuaRI9DHMQz39PwN5Bso7zF73dWA9qjDWV7d0MA+tEPyMjPT+CqVobFBQfQJ3eeXL10afMx0qHpQSgpw1cMxjbl+6/At90cbGZlpAldsUTc0aIKVUtg3fn5wpEUwHjECr8JF5xx/ET2uI7QSr6J/fT05UyrHJyZSKYxREB9P7qjlwpIStgfzqGvX8L6sxfjba9ce9vK1ztaFdY4ODmJza1FjblhYndfu5rAZM2bQLb13+03LyrJYEqxIPOzgIAW2WqLK2prroYcquRzNtAoFeXm9bgBbYyo0LS1dJWBX9MMBExPpjoiSTA8cQAYWIiM3l6MRgXstLeQEpeQ8ebIobV3SuC0pSROmHBmW8M030lva8dJYd3daj0gpViYTKdJ+DD9+XExtXdbUdPu2equiKGx7To52i34dMGOG7E3hL3shJ4dmczOnymTdFdiVjs4/AX8sQ35FBYDfrbB0E45I+Oor7XiyYbPAQFT/1F8bArgMcDCbAgCGwpP6NzbyZbaFy5kz7K1XLJ3NzuabolibYWFBczkN6cOGAUjDLxpWOg7A1dVVQDqshasr+uFZ+u7KFcTTRkSYmiKKVyPBwaFTgq6cSslff40bf9AA8oeBVFxSwgDY9ncc1qAAr+XnG2SKI9qAlSu7eiMDB4aEJCXduYMpeOrn0dpa5hiO8ZDLv/9+SJI6pOvq/kBI2TL7rVvRBgCdG0Cm0utIuHoVAJD5G887W1h/ascL4VkDBohVBsd5fU3NI5/+cmCN6OpqKRB/o4tyOSbq7zFckpsr/JuLfohllhkbWMmMBw68N11vxz3Pujrj8pZlA2bMmsVmWMNe27bhAdJw2dLyj8KSMxrh0dREbvpt/dZYWpqdCFyx5XpDw6/ndVoDBr/4xumd0+/d448wHH85ebLbyEvRD+dKSmgkgRojIlpuNm3QL7e3b/uA/ehqRYUwabVq0isoQJDe8zLjIUMe/k8wimox6y/On+eL2iptQFFRS0rTdP1xdnbIYWtKCQ+nMdBD1ZdfdpcGb0cxNp440ZnwLg1on5AnrRLX4uKgRhLCOx5yaBT8edn+/eISfyDZOjlZHAz+R2LJ2LFCJf1Vqjt6tM9aw/gHNuvXS5+Sl+DPP8c2NGGSo2MHoBXYgAh3d9ojM5Aciov7NPRze3By9erWQO07Ijc11fx2cFBiposLVUivcMDo0ZiLNPgkJ3fI8xNPmiTGSx5xcV3ulO46qhmjfCnscEYGn+eXkD9nTnuCOdiLlooKvoU8qoiKIm+aiU+9vfEFD+JCHx8+DA8o+/btkHAkEU1/8kmOA9jCyYlmM2O/StVhngwOsPjhByjZlWKOHJE2UhtOZWbyfHLnsp07+W1ejjLbn6sUIwacnm4xJLg2cZevr+4M+Lti/Bsn7O2RD7UIuHSJb2El/I2Muru+t4OssAkHGxv5sNZNJLu4WPiFZuz2vXGjq3XdboTM84ILd3iVlYkrWAOPqKjHLbhD1FAzly1d2l3h7cY9Kp5mkVIKq/jwQ47l3dg6a9bj0k1rKATLVCrz5MUiccTs2X90/SO3ws2jG8fr35o3T9etabeFx1A0DhQUaOcYftc3OiDgkfP0lMjdu7t3y+Wmpq12koGsOieHr6ENw52de035AGxA8Bdf6PfpUyUbO3GiKS2gBLp791HT9fgw9LCz4yTtaeH/3HMPq7DOhQdSFvpnZso+fjCWqiZM6Knwh9ELN0M/XoXVFSpPhl6IjOQnMYDOrFsHLUqhNjbudqKfjtX0KS+n0pgYs6Dg8YmTt2/X9VVZr98N1p7dcznCa8gQaah4TRsfHMx2XIdWb29agCPY9nMPz/vwMpaWltIpTObrKpXWmKu1RgqF5TT5R4ppanVv8/yfjf8AevAJPLieG/AAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDM6MTgrMDg6MDCzGOsaAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQzOjE4KzA4OjAwwkVTpgAAAEh0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25fNTdycnJndGJoZC9hbmppYW4uc3Zn2jSFNQAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "QW测试赛",
      uid: "QW测试赛",
      idcard: "",
      sex: "",
      nickname: "",
      personId: "200529848480000056",
      id: "Person-QW测试赛",
      gather: {
        total: null,
        items: null
      },
      label: "QW测试赛",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "AA",
      uid: "AA",
      sex: "",
      idcard: "",
      nickname: "",
      personId: "200507575500000023",
      id: "Person-AA",
      gather: {
        total: null,
        items: null
      },
      label: "AA",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "CaseGroup",
      entName: "专案",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseGroupId",
          displayName: "专案ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "caseGroupName",
          displayName: "专案标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseGroupDesc",
          displayName: "专案描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createDept",
          displayName: "立案部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "立案人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createTime",
          displayName: "立案时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      caseGroupName: "55555线索转",
      uid: "200522940540000029",
      createDept: "200508439650000001",
      createTime: "1590495787000",
      caseGroupId: "200522940540000029",
      caseGroupDesc: "",
      createUser: "",
      id: "CaseGroup-200522940540000029",
      gather: {
        total: 1,
        items: [
          {
            type: "Person",
            cnt: 1
          }
        ]
      },
      label: "55555线索转",
      icon: {
        show: true,
        img:
          "data:image/png;base64,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",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "WEWE",
      uid: "WEWE",
      sex: "",
      idcard: "",
      nickname: "",
      personId: "200602750040000012",
      id: "Person-WEWE",
      gather: {
        total: null,
        items: null
      },
      label: "WEWE",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "yug",
      uid: "yug",
      sex: "",
      idcard: "",
      nickname: "",
      personId: "200529848480000075",
      id: "Person-yug",
      gather: {
        total: null,
        items: null
      },
      label: "yug",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "CaseGroup",
      entName: "专案",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseGroupId",
          displayName: "专案ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "caseGroupName",
          displayName: "专案标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseGroupDesc",
          displayName: "专案描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createDept",
          displayName: "立案部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "立案人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createTime",
          displayName: "立案时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      caseGroupName: "3-1-线索转专案测试1",
      uid: "200706916850000006",
      createDept: "200508439650000001",
      createTime: "1594037255000",
      caseGroupId: "200706916850000006",
      caseGroupDesc: "null；null",
      createUser: "admin",
      id: "CaseGroup-200706916850000006",
      gather: {
        total: null,
        items: null
      },
      label: "3-1-线索转专案测试1",
      icon: {
        show: true,
        img:
          "data:image/png;base64,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",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "照旧",
      uid: "照旧",
      idcard: "",
      sex: "",
      nickname: "",
      personId: "200421743460000010",
      id: "Person-照旧",
      gather: {
        total: null,
        items: null
      },
      label: "照旧",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Clue",
      entName: "线索",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseId",
          displayName: "线索ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: false
        },
        {
          localName: "caseName",
          displayName: "线索标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseDesc",
          displayName: "线索描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "caseTime",
          displayName: "线索时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "createDept",
          displayName: "上报部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "上报人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      uid: "200618648270000020",
      createDept: "200508439650000001",
      caseId: "200618648270000020",
      caseTime: "1592409600000",
      caseName: "1",
      createUser: "admin",
      id: "Clue-200618648270000020",
      gather: {
        total: null,
        items: null
      },
      caseDesc: "1",
      label: "1",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAg1JREFUOBGNU0FrE1EQnnlvbVrENtkigiePmhcRPChtRPQveJCiIM2pKliyiUSsCmsvVbA1IEVvgh7Tg3+gePGgh1xst/4BqYjuvkRSlZbdcV7bLC9BJQPLvPnmm3nfzs6i8mkI2vohEV1DBAGAr2Esdz/wcRsGMIeL5wlgCoWcRSRKElrCtjaltQHqAfNeuIkkZ4N6dsUUFKr6EsX0wkG6aDdIMnJz7VF2t7ONs+ReI2IdQId3CNbtJ/6dhMqLFnrZ/MKqEj2GBKYARHUvmSwS0htHunM2OU5aZyihVZRwPlh033VzDozmHvAcECB+xv2GgOjVyHG31pzBnS5p379VXtgEwiLHaYM+zr/DCz45+XL0Pe/pks1y7KAw1zlCv7ZL/DmP2rg5f2vr04z/hLFsw86x9D0769Nop6XXAOgrIGx08dQTfh6GzHKzfvBLivEhVbD1Q1/l4R1QE+5E4zLGNul/57QBb6KRvfG3Ys5hoRL5PMAbrE4yb4W3tcrb2kn3ABE/MOHcKS9U/TcWKvoOEMygoFsg6AoRTEJLLxteOgMTqHL4ktd6mmF2thEKgTfXl9znBlXlqMiE1ZETuUOpApMI6uOljBTHpENF++FbPvGtRvquCcnrtG89Crpgv1ee9ngO91DgbdbW5l9ugbW/D56OTw/UwAzxZEXfZdnXeRbDXNyQMlf7+AS3/gCLBdBFdU/VjgAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "lucy2",
      uid: "lucy2",
      idcard: "",
      sex: "女",
      nickname: "",
      personId: "200529848480000041",
      id: "Person-lucy2",
      gather: {
        total: null,
        items: null
      },
      label: "lucy2",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "AWSXR",
      uid: "AWSXR",
      sex: "",
      idcard: "",
      nickname: "",
      personId: "200417047730000000",
      id: "Person-AWSXR",
      gather: {
        total: null,
        items: null
      },
      label: "AWSXR",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "小小",
      uid: "小小",
      idcard: "",
      sex: "",
      nickname: "",
      personId: "200420284650000001",
      id: "Person-小小",
      gather: {
        total: null,
        items: null
      },
      label: "小小",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "张思",
      uid: "410183199210223456",
      idcard: "410183199210223456",
      sex: "男",
      nickname: "4",
      personId: "200430667640000021",
      id: "Person-410183199210223456",
      gather: {
        total: null,
        items: null
      },
      label: "张思",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "CaseGroup",
      entName: "专案",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseGroupId",
          displayName: "专案ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "caseGroupName",
          displayName: "专案标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseGroupDesc",
          displayName: "专案描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createDept",
          displayName: "立案部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "立案人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createTime",
          displayName: "立案时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      caseGroupName: "6",
      uid: "200409898050000007",
      createDept: "200508439650000001",
      createTime: "1586442041000",
      caseGroupId: "200409898050000007",
      caseGroupDesc: "",
      createUser: "",
      id: "CaseGroup-200409898050000007",
      gather: {
        total: null,
        items: null
      },
      label: "6",
      icon: {
        show: true,
        img:
          "data:image/png;base64,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",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "叶铿",
      uid: "33102319961012463x",
      idcard: "33102319961012463x",
      sex: "男",
      nickname: "49",
      personId: "200401786650000000",
      id: "Person-33102319961012463x",
      gather: {
        total: null,
        items: null
      },
      label: "叶铿",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "大大",
      uid: "大大",
      idcard: "",
      sex: "",
      nickname: "",
      personId: "200420284650000000",
      id: "Person-大大",
      gather: {
        total: null,
        items: null
      },
      label: "大大",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "A",
      uid: "A",
      sex: "",
      idcard: "A",
      nickname: "A",
      personId: "200423822470000000",
      id: "Person-A",
      gather: {
        total: null,
        items: null
      },
      label: "A",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "CaseGroup",
      entName: "专案",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseGroupId",
          displayName: "专案ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "caseGroupName",
          displayName: "专案标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseGroupDesc",
          displayName: "专案描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createDept",
          displayName: "立案部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "立案人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createTime",
          displayName: "立案时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      caseGroupName: "专案11-热热热",
      uid: "200519613620000008",
      createDept: "200508439650000001",
      createTime: "1589891374000",
      caseGroupId: "200519613620000008",
      caseGroupDesc: "专案情况描述",
      createUser: "",
      id: "CaseGroup-200519613620000008",
      gather: {
        total: null,
        items: null
      },
      label: "专案11-热热热",
      icon: {
        show: true,
        img:
          "data:image/png;base64,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",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "a",
      uid: "a",
      idcard: "",
      sex: "",
      nickname: "凄凄切切",
      personId: "200529848480000004",
      id: "Person-a",
      gather: {
        total: null,
        items: null
      },
      label: "a",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "2",
      uid: "2",
      sex: "",
      idcard: "",
      nickname: "",
      personId: "200430667640000025",
      id: "Person-2",
      gather: {
        total: null,
        items: null
      },
      label: "2",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Clue",
      entName: "线索",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseId",
          displayName: "线索ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: false
        },
        {
          localName: "caseName",
          displayName: "线索标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseDesc",
          displayName: "线索描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "caseTime",
          displayName: "线索时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "createDept",
          displayName: "上报部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "上报人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      uid: "200522940540000013",
      createDept: "200508439650000001",
      caseId: "200522940540000013",
      caseTime: "1588608000000",
      caseName: "99999",
      createUser: "",
      id: "Clue-200522940540000013",
      gather: {
        total: 2,
        items: [
          {
            type: "Person",
            cnt: 2
          }
        ]
      },
      caseDesc: "99999线索内容描述",
      label: "99999",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAg1JREFUOBGNU0FrE1EQnnlvbVrENtkigiePmhcRPChtRPQveJCiIM2pKliyiUSsCmsvVbA1IEVvgh7Tg3+gePGgh1xst/4BqYjuvkRSlZbdcV7bLC9BJQPLvPnmm3nfzs6i8mkI2vohEV1DBAGAr2Esdz/wcRsGMIeL5wlgCoWcRSRKElrCtjaltQHqAfNeuIkkZ4N6dsUUFKr6EsX0wkG6aDdIMnJz7VF2t7ONs+ReI2IdQId3CNbtJ/6dhMqLFnrZ/MKqEj2GBKYARHUvmSwS0htHunM2OU5aZyihVZRwPlh033VzDozmHvAcECB+xv2GgOjVyHG31pzBnS5p379VXtgEwiLHaYM+zr/DCz45+XL0Pe/pks1y7KAw1zlCv7ZL/DmP2rg5f2vr04z/hLFsw86x9D0769Nop6XXAOgrIGx08dQTfh6GzHKzfvBLivEhVbD1Q1/l4R1QE+5E4zLGNul/57QBb6KRvfG3Ys5hoRL5PMAbrE4yb4W3tcrb2kn3ABE/MOHcKS9U/TcWKvoOEMygoFsg6AoRTEJLLxteOgMTqHL4ktd6mmF2thEKgTfXl9znBlXlqMiE1ZETuUOpApMI6uOljBTHpENF++FbPvGtRvquCcnrtG89Crpgv1ee9ngO91DgbdbW5l9ugbW/D56OTw/UwAzxZEXfZdnXeRbDXNyQMlf7+AS3/gCLBdBFdU/VjgAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "123",
      uid: "a era",
      idcard: "a era",
      sex: "男",
      nickname: "wwwwww",
      personId: "200403750250000015",
      id: "Person-a era",
      gather: {
        total: null,
        items: null
      },
      label: "123",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "CaseGroup",
      entName: "专案",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseGroupId",
          displayName: "专案ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "caseGroupName",
          displayName: "专案标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseGroupDesc",
          displayName: "专案描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createDept",
          displayName: "立案部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "立案人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createTime",
          displayName: "立案时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      caseGroupName: "1测试",
      uid: "200408899980000016",
      createDept: "200508439650000001",
      createTime: "1586354316000",
      caseGroupId: "200408899980000016",
      caseGroupDesc: "",
      createUser: "",
      id: "CaseGroup-200408899980000016",
      gather: {
        total: null,
        items: null
      },
      label: "1测试",
      icon: {
        show: true,
        img:
          "data:image/png;base64,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",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "CaseGroup",
      entName: "专案",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseGroupId",
          displayName: "专案ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "caseGroupName",
          displayName: "专案标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseGroupDesc",
          displayName: "专案描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createDept",
          displayName: "立案部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "立案人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createTime",
          displayName: "立案时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      caseGroupName: "线索转专案123",
      uid: "200602807460000012",
      createDept: "200508439650000001",
      createTime: "1591084782000",
      caseGroupId: "200602807460000012",
      caseGroupDesc: "",
      createUser: "admin",
      id: "CaseGroup-200602807460000012",
      gather: {
        total: 1,
        items: [
          {
            type: "Person",
            cnt: 1
          }
        ]
      },
      label: "线索转专案123",
      icon: {
        show: true,
        img:
          "data:image/png;base64,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",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "erer",
      uid: "eee",
      sex: "",
      idcard: "eee",
      nickname: "eeee",
      personId: "200410094840000002",
      id: "Person-eee",
      gather: {
        total: null,
        items: null
      },
      label: "erer",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "叶铿",
      uid: "331023199610124888",
      idcard: "331023199610124888",
      sex: "男",
      nickname: "",
      personId: "200420457110000016",
      id: "Person-331023199610124888",
      gather: {
        total: null,
        items: null
      },
      label: "叶铿",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "CaseGroup",
      entName: "专案",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseGroupId",
          displayName: "专案ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "caseGroupName",
          displayName: "专案标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseGroupDesc",
          displayName: "专案描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createDept",
          displayName: "立案部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "立案人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createTime",
          displayName: "立案时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      caseGroupName: "66666-测试转换",
      uid: "200701658160000032",
      createDept: "200508439650000001",
      createTime: "1594091600000",
      caseGroupId: "200701658160000032",
      caseGroupDesc: "66666；null",
      createUser: "admin",
      id: "CaseGroup-200701658160000032",
      gather: {
        total: null,
        items: null
      },
      label: "66666-测试转换",
      icon: {
        show: true,
        img:
          "data:image/png;base64,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",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "朝气",
      uid: "77",
      sex: "",
      idcard: "77",
      nickname: "",
      personId: "200421743460000004",
      id: "Person-77",
      gather: {
        total: null,
        items: null
      },
      label: "朝气",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "bill",
      uid: "bill",
      sex: "男",
      idcard: "",
      nickname: "",
      personId: "200401786650000002",
      id: "Person-bill",
      gather: {
        total: null,
        items: null
      },
      label: "bill",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Clue",
      entName: "线索",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseId",
          displayName: "线索ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: false
        },
        {
          localName: "caseName",
          displayName: "线索标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseDesc",
          displayName: "线索描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "caseTime",
          displayName: "线索时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "createDept",
          displayName: "上报部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "上报人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      uid: "200426000860000005",
      createDept: "200508439650000001",
      caseId: "200426000860000005",
      caseTime: "1586793600000",
      caseName: "线索19",
      createUser: "",
      id: "Clue-200426000860000005",
      gather: {
        total: null,
        items: null
      },
      caseDesc: "线索1内容描述881\n线索1内容描述88",
      label: "线索19",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAg1JREFUOBGNU0FrE1EQnnlvbVrENtkigiePmhcRPChtRPQveJCiIM2pKliyiUSsCmsvVbA1IEVvgh7Tg3+gePGgh1xst/4BqYjuvkRSlZbdcV7bLC9BJQPLvPnmm3nfzs6i8mkI2vohEV1DBAGAr2Esdz/wcRsGMIeL5wlgCoWcRSRKElrCtjaltQHqAfNeuIkkZ4N6dsUUFKr6EsX0wkG6aDdIMnJz7VF2t7ONs+ReI2IdQId3CNbtJ/6dhMqLFnrZ/MKqEj2GBKYARHUvmSwS0htHunM2OU5aZyihVZRwPlh033VzDozmHvAcECB+xv2GgOjVyHG31pzBnS5p379VXtgEwiLHaYM+zr/DCz45+XL0Pe/pks1y7KAw1zlCv7ZL/DmP2rg5f2vr04z/hLFsw86x9D0769Nop6XXAOgrIGx08dQTfh6GzHKzfvBLivEhVbD1Q1/l4R1QE+5E4zLGNul/57QBb6KRvfG3Ys5hoRL5PMAbrE4yb4W3tcrb2kn3ABE/MOHcKS9U/TcWKvoOEMygoFsg6AoRTEJLLxteOgMTqHL4ktd6mmF2thEKgTfXl9znBlXlqMiE1ZETuUOpApMI6uOljBTHpENF++FbPvGtRvquCcnrtG89Crpgv1ee9ngO91DgbdbW5l9ugbW/D56OTw/UwAzxZEXfZdnXeRbDXNyQMlf7+AS3/gCLBdBFdU/VjgAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Clue",
      entName: "线索",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "caseId",
          displayName: "线索ID",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: false
        },
        {
          localName: "caseName",
          displayName: "线索标题",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "caseDesc",
          displayName: "线索描述",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "caseTime",
          displayName: "线索时间",
          dataType: "datetime",
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        },
        {
          localName: "createDept",
          displayName: "上报部门",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: true
        },
        {
          localName: "createUser",
          displayName: "上报人",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: false,
          isTitle: false,
          isSearchable: null
        }
      ],
      uid: "200529848480000091",
      createDept: "200508439650000001",
      caseId: "200529848480000091",
      caseTime: "1590422400000",
      caseName: "TTTTTT",
      createUser: "admin",
      id: "Clue-200529848480000091",
      gather: {
        total: 1,
        items: [
          {
            type: "Person",
            cnt: 1
          }
        ]
      },
      caseDesc: "线索内容描述TTTTTT",
      label: "TTTTTT",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAg1JREFUOBGNU0FrE1EQnnlvbVrENtkigiePmhcRPChtRPQveJCiIM2pKliyiUSsCmsvVbA1IEVvgh7Tg3+gePGgh1xst/4BqYjuvkRSlZbdcV7bLC9BJQPLvPnmm3nfzs6i8mkI2vohEV1DBAGAr2Esdz/wcRsGMIeL5wlgCoWcRSRKElrCtjaltQHqAfNeuIkkZ4N6dsUUFKr6EsX0wkG6aDdIMnJz7VF2t7ONs+ReI2IdQId3CNbtJ/6dhMqLFnrZ/MKqEj2GBKYARHUvmSwS0htHunM2OU5aZyihVZRwPlh033VzDozmHvAcECB+xv2GgOjVyHG31pzBnS5p379VXtgEwiLHaYM+zr/DCz45+XL0Pe/pks1y7KAw1zlCv7ZL/DmP2rg5f2vr04z/hLFsw86x9D0769Nop6XXAOgrIGx08dQTfh6GzHKzfvBLivEhVbD1Q1/l4R1QE+5E4zLGNul/57QBb6KRvfG3Ys5hoRL5PMAbrE4yb4W3tcrb2kn3ABE/MOHcKS9U/TcWKvoOEMygoFsg6AoRTEJLLxteOgMTqHL4ktd6mmF2thEKgTfXl9znBlXlqMiE1ZETuUOpApMI6uOljBTHpENF++FbPvGtRvquCcnrtG89Crpgv1ee9ngO91DgbdbW5l9ugbW/D56OTw/UwAzxZEXfZdnXeRbDXNyQMlf7+AS3/gCLBdBFdU/VjgAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    },
    {
      shape: "graphNode",
      entId: "Person",
      entName: "人员",
      iconId: "",
      extend: [],
      properties: [
        {
          localName: "personId",
          displayName: "人员ID",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        },
        {
          localName: "idcard",
          displayName: "身份证号",
          dataType: null,
          isPk: true,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "personName",
          displayName: "姓名",
          dataType: null,
          isPk: null,
          isSecondPk: true,
          isHidden: false,
          isTitle: true,
          isSearchable: true
        },
        {
          localName: "nickname",
          displayName: "绰号",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: true
        },
        {
          localName: "sex",
          displayName: "性别",
          dataType: null,
          isPk: null,
          isSecondPk: null,
          isHidden: null,
          isTitle: null,
          isSearchable: null
        }
      ],
      personName: "测试234任务",
      uid: "测试234任务",
      idcard: "",
      sex: "",
      nickname: "大幅度发",
      personId: "200529848480000069",
      id: "Person-测试234任务",
      gather: {
        total: null,
        items: null
      },
      label: "测试234任务",
      icon: {
        show: true,
        img:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAu9JREFUaN7tmE1IVFEYhp/vmpbYj4jhT0jtJCEkNSaTIhQEIVcSJsKswtz0B9nCcTAnSyEQigJLGDcKCmWCEG4iZzYuBG2TJCEkaiKiA0KKaPdroYNSUc7MHWekefb3Pd/7cObecwZixIjxPyPhX6JRVZOTIb4SamqAD2hpKXAaSUsDfQc+H8gSeDzAF2hvh4YSkdnZfSzg4VfV4mKQBLS3F3Ajqam7eDAXVlZAJtEbN8BxR4yurn0koHlBzYIC4BLi9QLVkJgYRFAimCZoN1RUgHNUpL/f6mkN66JUVUVAMpD29hCK+1kFwwDjE7x4AW3nVUPKC7eAx1chNxf0AeTnW5erTsjMhO/foKwsigUwA3l5Vg+4A2848q38CQxAQkIYBQyjhw5FsQDpRicnwygAxPp8CwUcGQSvF/gCCwsWzvgc1tdh4xo6MBDFAm4NirG2BnoTdTgsnNGFPn0KTSLGzEwUC/DjLBCjowP0LPrkSfA50ov29cFxE+rrrZ9za5VwBW/TvKFmeTnQvFWkBbHZACfIzvX7YXwc9DW0tUHDSXC7QUREdR8L+JXWFjWPHQPzHKSlAdWbd4H6eTEsfXdESoD/KCyViN0OeOHCBdDbmwcaJuCvnzMP6vMBP5CpKeAKDA6C4UE7O60WZYGARlXz8GE4MIW8fAmSDVVV/L7FQ6UElpdBLkJdHTg2RF69iqAAf/GEeGRoyPoj8D+5Cy4XNCSJNDYGGxLCVyD+7ealZ8+L+0kBp3PHSzYogtgBLpdqfj4Yj2BkBOu3eqAUwsQErBdDTg40iYhp7vbhIHaAMQd2exQU9zMM2dlw8D3YbAG3CXw96YHCwki3/h3zDVpUtAcC9D6kp0e67h84BRkZeyCA67C0FOm2f6AHWVzcAwFm7eafldxDx8YiWLgbVldBa6GrC9ZH0WfPAg2x5iCkKSkQ9xk9cQLEjWRlgRxFk5JCz9dWUIW4yzA/D/IR5uYg6QxMT2/fQmPEiBEjcH4CRMD8qQAvun8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjBUMTE6NDU6NTIrMDg6MDCePMrpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTIwVDExOjQ1OjUyKzA4OjAw72FyVQAAAEV0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25faHA4eWQ3cDhpbC9yZW4uc3ZnlGvKdAAAAABJRU5ErkJggg==",
        width: 32,
        height: 32
      }
    }
  ],
  edges: [
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "874",
      source: "CaseGroup-200522940540000036",
      target: "Person-1",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "777",
      source: "CaseGroup-200519254130000000",
      target: "Person-AWSXR",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "647",
      source: "CaseGroup-200409898050000007",
      target: "Person-Q",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "665",
      source: "CaseGroup-200331171410000000",
      target: "Person-ssdd",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "901",
      source: "CaseGroup-200522940540000036",
      target: "Person-77",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "804",
      source: "CaseGroup-200519613620000008",
      target: "Person-33102319961012463x",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1122",
      source: "CaseGroup-200701658160000032",
      target: "Person-33102319961012463x",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "872",
      source: "CaseGroup-200522940540000036",
      target: "Person-331023199610124637",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "783",
      source: "CaseGroup-200519254130000000",
      target: "Person-小小",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1164",
      source: "Clue-200514967000000009",
      target: "Person-4***83****10*****5",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1048",
      source: "CaseGroup-200519254130000000",
      target: "Person-WEWE",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1037",
      source: "CaseGroup-200519254130000000",
      target: "Person-a",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1141",
      source: "CaseGroup-200701658160000058",
      target: "Person-B",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "887",
      source: "CaseGroup-200522940540000036",
      target: "Person-xcxcxc",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "821",
      source: "CaseGroup-200519613620000008",
      target: "Person-ssdd",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "696",
      source: "CaseGroup-200331171410000000",
      target: "Person-EE",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "659",
      source: "CaseGroup-200408899980000016",
      target: "Person-77",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1254",
      source: "Clue-200602902690000003",
      target: "Person-B",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1251",
      source: "Clue-200618648270000020",
      target: "Person-AA",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "976",
      source: "CaseGroup-200331171410000000",
      target: "Person-WEWE",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "899",
      source: "CaseGroup-200522940540000036",
      target: "Person-66",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "627",
      source: "CaseGroup-200408899980000016",
      target: "Person-1",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1190",
      source: "Clue-200527270830000007",
      target: "Person-AA",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "677",
      source: "CaseGroup-200331171410000000",
      target: "Person-Q",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "927",
      source: "CaseGroup-200522940540000036",
      target: "Person-大大",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1126",
      source: "CaseGroup-200701658160000032",
      target: "Person-B",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1214",
      source: "Clue-200527270830000007",
      target: "Person-AWSXR",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "755",
      source: "CaseGroup-200519254130000000",
      target: "Person-77",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1177",
      source: "Clue-200527270830000007",
      target: "Person-测试234任务",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "941",
      source: "CaseGroup-200522940540000036",
      target: "Person-照旧",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1209",
      source: "Clue-200527270830000007",
      target: "Person-小小",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "709",
      source: "CaseGroup-200331171410000000",
      target: "Person-123",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "633",
      source: "CaseGroup-200409898050000007",
      target: "Person-ddddddd",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1180",
      source: "Clue-200527270830000007",
      target: "Person-lucy2",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "878",
      source: "CaseGroup-200522940540000036",
      target: "Person-33102319961012463x",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1200",
      source: "Clue-200527270830000007",
      target: "Person-ssdd",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1243",
      source: "Clue-200529848480000091",
      target: "Person-4***83****10*****5",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "857",
      source: "CaseGroup-200519613620000008",
      target: "Person-123",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "931",
      source: "CaseGroup-200522940540000036",
      target: "Person-123",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "775",
      source: "CaseGroup-200519254130000000",
      target: "Person-张三丰123",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "993",
      source: "CaseGroup-200615162990000010",
      target: "Person-WEWE",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "964",
      source: "CaseGroup-200602807460000012",
      target: "Person-410183199210223456",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "730",
      source: "CaseGroup-200519254130000000",
      target: "Person-4***83****10*****5",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1072",
      source: "CaseGroup-200618602030000000",
      target: "Person-测试赛ss",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1175",
      source: "Clue-200527270830000007",
      target: "Person-yug",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "753",
      source: "CaseGroup-200519254130000000",
      target: "Person-66",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1176",
      source: "Clue-200527270830000007",
      target: "Person-测试赛ss",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "623",
      source: "CaseGroup-200409898050000007",
      target: "Person-a era",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "861",
      source: "CaseGroup-200519613620000008",
      target: "Person-331023199610124777",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "798",
      source: "CaseGroup-200519613620000008",
      target: "Person-331023199610124637",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "968",
      source: "CaseGroup-200602807460000012",
      target: "Person-1",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1170",
      source: "Clue-200602750040000005",
      target: "Person-QW测试赛",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1194",
      source: "Clue-200527270830000007",
      target: "Person-410183199210223456",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "915",
      source: "CaseGroup-200522940540000036",
      target: "Person-qqq",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1239",
      source: "Clue-200529848480000091",
      target: "Person-B",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1112",
      source: "CaseGroup-200701658160000032",
      target: "Person-测试赛ss",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "751",
      source: "CaseGroup-200519254130000000",
      target: "Person-QWQWQ",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1215",
      source: "Clue-200527270830000007",
      target: "Person-张三丰123",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "707",
      source: "CaseGroup-200331171410000000",
      target: "Person-小小",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "671",
      source: "CaseGroup-200331171410000000",
      target: "Person-QWQWQ",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "973",
      source: "CaseGroup-200331171410000000",
      target: "Person-FE",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1094",
      source: "CaseGroup-200701658160000011",
      target: "Person-33102319961012463x",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "980",
      source: "CaseGroup-200331171410000000",
      target: "Person-a",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "667",
      source: "CaseGroup-200408899980000016",
      target: "Person-bill",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "711",
      source: "CaseGroup-200331171410000000",
      target: "Person-331023199610124888",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "859",
      source: "CaseGroup-200519613620000008",
      target: "Person-331023199610124888",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1110",
      source: "CaseGroup-200701658160000032",
      target: "Person-331023199610124637",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "572",
      source: "CaseGroup-200331171410000000",
      target: "Person-33102319961012463x",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "867",
      source: "CaseGroup-200519613620000008",
      target: "Person-照旧",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "841",
      source: "CaseGroup-200519613620000008",
      target: "Person-qqq",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1182",
      source: "Clue-200527270830000007",
      target: "Person-a",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "997",
      source: "CaseGroup-200615162990000010",
      target: "Person-测试赛ss",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1226",
      source: "Clue-200527270830000007",
      target: "Person-ddddddd",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1167",
      source: "Clue-200602750040000005",
      target: "Person-测试赛ss",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1174",
      source: "Clue-200527270830000007",
      target: "Person-FE",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "717",
      source: "CaseGroup-200331171410000000",
      target: "Person-爪八",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1132",
      source: "CaseGroup-200706916850000006",
      target: "Person-331023199610124637",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1257",
      source: "Clue-200602750040000000",
      target: "Person-SSS",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1244",
      source: "Clue-200529848480000091",
      target: "Person-a",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1229",
      source: "Clue-200527270830000007",
      target: "Person-bill",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "793",
      source: "CaseGroup-200519254130000000",
      target: "Person-爪八",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "661",
      source: "CaseGroup-200408899980000016",
      target: "Person-爪八",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "787",
      source: "CaseGroup-200519254130000000",
      target: "Person-331023199610124888",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "749",
      source: "CaseGroup-200519254130000000",
      target: "Person-ssdd",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1253",
      source: "Clue-200602902690000003",
      target: "Person-bill",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1076",
      source: "CaseGroup-200618602030000000",
      target: "Person-aaaaaaa",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1204",
      source: "Clue-200527270830000007",
      target: "Person-66",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1248",
      source: "Clue-200618648270000020",
      target: "Person-331023199610124888",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1252",
      source: "Clue-200618648270000020",
      target: "Person-FE",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "597",
      source: "Clue-200426000860000006",
      target: "Person-1",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1169",
      source: "Clue-200602750040000005",
      target: "Person-测试测试1111111",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "599",
      source: "Clue-200426000860000005",
      target: "Person-1",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1199",
      source: "Clue-200527270830000007",
      target: "Person-QWQWQ",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "693",
      source: "CaseGroup-200331171410000000",
      target: "Person-qqq",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "681",
      source: "CaseGroup-200331171410000000",
      target: "Person-bill",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1240",
      source: "Clue-200529848480000091",
      target: "Person-bill",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1201",
      source: "Clue-200527270830000007",
      target: "Person-照旧",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "789",
      source: "CaseGroup-200519254130000000",
      target: "Person-331023199610124777",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1237",
      source: "Clue-200529848480000091",
      target: "Person-331023199610124637",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "570",
      source: "CaseGroup-200331171410000000",
      target: "Person-4***83****10*****5",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1051",
      source: "CaseGroup-200331171410000000",
      target: "Person-aaaaaaa",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1211",
      source: "Clue-200527270830000007",
      target: "Person-123",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "958",
      source: "CaseGroup-200331171410000000",
      target: "Person-测试测试1111111",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1171",
      source: "Clue-200602750040000005",
      target: "Person-最新测试人",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "772",
      source: "CaseGroup-200519254130000000",
      target: "Person-EE",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1168",
      source: "Clue-200602750040000005",
      target: "Person-测试234任务",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1043",
      source: "CaseGroup-200618602030000000",
      target: "Person-B",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1249",
      source: "Clue-200618648270000020",
      target: "Person-a",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "685",
      source: "CaseGroup-200408899980000016",
      target: "Person-ssssssss",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "853",
      source: "CaseGroup-200519613620000008",
      target: "Person-大大",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "929",
      source: "CaseGroup-200522940540000036",
      target: "Person-小小",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "675",
      source: "CaseGroup-200331171410000000",
      target: "Person-77",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "669",
      source: "CaseGroup-200408899980000016",
      target: "Person-4***83****10*****5",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1246",
      source: "Clue-200602873020000001",
      target: "Person-331023199610124888",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1007",
      source: "CaseGroup-200615162990000047",
      target: "Person-测试赛ss",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1166",
      source: "Clue-200527748700000000",
      target: "Person-4***83****10*****5",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1242",
      source: "Clue-200529848480000091",
      target: "Person-eee",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1134",
      source: "CaseGroup-200706916850000006",
      target: "Person-a era",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1092",
      source: "CaseGroup-200701658160000002",
      target: "Person-bill",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1179",
      source: "Clue-200527270830000007",
      target: "Person-QW测试赛",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "991",
      source: "CaseGroup-200615162990000010",
      target: "Person-FE",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "713",
      source: "CaseGroup-200331171410000000",
      target: "Person-331023199610124777",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "699",
      source: "CaseGroup-200331171410000000",
      target: "Person-张三丰123",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1256",
      source: "Clue-200602750040000000",
      target: "Person-测试赛ss",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "568",
      source: "CaseGroup-200331171410000000",
      target: "Person-1",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1224",
      source: "Clue-200527270830000007",
      target: "Person-qqq",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1189",
      source: "Clue-200527270830000007",
      target: "Person-SSS",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "823",
      source: "CaseGroup-200519613620000008",
      target: "Person-QWQWQ",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "847",
      source: "CaseGroup-200519613620000008",
      target: "Person-张三丰123",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1227",
      source: "Clue-200527270830000007",
      target: "Person-a era",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "673",
      source: "CaseGroup-200331171410000000",
      target: "Person-66",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "757",
      source: "CaseGroup-200519254130000000",
      target: "Person-Q",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1116",
      source: "CaseGroup-200701658160000032",
      target: "Person-bill",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "596",
      source: "Clue-200426000860000006",
      target: "Person-33102319961012463x",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "972",
      source: "CaseGroup-200522940540000029",
      target: "Person-SSS",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "923",
      source: "CaseGroup-200522940540000036",
      target: "Person-AWSXR",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "732",
      source: "CaseGroup-200519254130000000",
      target: "Person-33102319961012463x",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "825",
      source: "CaseGroup-200519613620000008",
      target: "Person-66",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1231",
      source: "Clue-200527270830000007",
      target: "Person-1",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1228",
      source: "Clue-200527270830000007",
      target: "Person-331023199610124637",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "781",
      source: "CaseGroup-200519254130000000",
      target: "Person-大大",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "836",
      source: "CaseGroup-200519613620000008",
      target: "Person-eee",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "960",
      source: "CaseGroup-200331171410000000",
      target: "Person-测试234任务",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "935",
      source: "CaseGroup-200522940540000036",
      target: "Person-331023199610124777",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "635",
      source: "CaseGroup-200331171410000000",
      target: "Person-xcxcxc",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1077",
      source: "CaseGroup-200618602030000000",
      target: "Person-a",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1255",
      source: "Clue-200618648270000020",
      target: "Person-bill",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1137",
      source: "CaseGroup-200706916850000006",
      target: "Person-AA",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "962",
      source: "CaseGroup-200602807460000012",
      target: "Person-123198199203241324",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1139",
      source: "CaseGroup-200706916850000006",
      target: "Person-AWSXR",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "827",
      source: "CaseGroup-200519613620000008",
      target: "Person-77",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1183",
      source: "Clue-200527270830000007",
      target: "Person-最新测试人",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1096",
      source: "CaseGroup-200701658160000011",
      target: "Person-4***83****10*****5",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1212",
      source: "Clue-200527270830000007",
      target: "Person-210",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1161",
      source: "Clue-200426000860000005",
      target: "Person-4***83****10*****5",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1218",
      source: "Clue-200527270830000007",
      target: "Person-xcxcxc",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1114",
      source: "CaseGroup-200701658160000032",
      target: "Person-a",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1178",
      source: "Clue-200527270830000007",
      target: "Person-测试测试1111111",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "594",
      source: "CaseGroup-200331171410000000",
      target: "Person-331023199610124637",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1039",
      source: "CaseGroup-200519254130000000",
      target: "Person-B",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1101",
      source: "CaseGroup-200701658160000011",
      target: "Person-bill",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1163",
      source: "Clue-200514967000000009",
      target: "Person-a era",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "631",
      source: "CaseGroup-200409898050000007",
      target: "Person-1",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "851",
      source: "CaseGroup-200519613620000008",
      target: "Person-210",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "982",
      source: "CaseGroup-200514604280000000",
      target: "Person-bill",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "779",
      source: "CaseGroup-200519254130000000",
      target: "Person-210",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "933",
      source: "CaseGroup-200522940540000036",
      target: "Person-331023199610124888",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1184",
      source: "Clue-200527270830000007",
      target: "Person-4***83****10*****5",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1035",
      source: "CaseGroup-200519254130000000",
      target: "Person-A",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "903",
      source: "CaseGroup-200522940540000036",
      target: "Person-Q",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "977",
      source: "CaseGroup-200331171410000000",
      target: "Person-410183199210223456",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "703",
      source: "CaseGroup-200331171410000000",
      target: "Person-210",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "984",
      source: "CaseGroup-200514604280000000",
      target: "Person-4***83****10*****5",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1173",
      source: "Clue-200527270830000007",
      target: "Person-WEWE",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "688",
      source: "CaseGroup-200331171410000000",
      target: "Person-eee",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1210",
      source: "Clue-200527270830000007",
      target: "Person-大大",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "679",
      source: "CaseGroup-200408899980000016",
      target: "Person-331023199610124637",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1203",
      source: "Clue-200527270830000007",
      target: "Person-77",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "598",
      source: "Clue-200426000860000005",
      target: "Person-331023199610124888",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "995",
      source: "CaseGroup-200615162990000010",
      target: "Person-yug",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1230",
      source: "Clue-200527270830000007",
      target: "Person-33102319961012463x",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1090",
      source: "CaseGroup-200701658160000002",
      target: "Person-1",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1241",
      source: "Clue-200529848480000091",
      target: "Person-ssdd",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "621",
      source: "CaseGroup-200409898050000007",
      target: "Person-4***83****10*****5",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "741",
      source: "CaseGroup-200519254130000000",
      target: "Person-xcxcxc",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "956",
      source: "CaseGroup-200527748700000002",
      target: "Person-yug",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1225",
      source: "Clue-200527270830000007",
      target: "Person-eee",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "986",
      source: "CaseGroup-200514604280000000",
      target: "Person-FE",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1041",
      source: "CaseGroup-200618602030000000",
      target: "Person-bill",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1247",
      source: "Clue-200602873020000001",
      target: "Person-4***83****10*****5",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "705",
      source: "CaseGroup-200331171410000000",
      target: "Person-大大",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "831",
      source: "CaseGroup-200519613620000008",
      target: "Person-bill",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "939",
      source: "CaseGroup-200522940540000036",
      target: "Person-爪八",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "954",
      source: "CaseGroup-200527748700000002",
      target: "Person-测试赛ss",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1013",
      source: "CaseGroup-200331171410000000",
      target: "Person-A",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "918",
      source: "CaseGroup-200522940540000036",
      target: "Person-EE",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "897",
      source: "CaseGroup-200522940540000036",
      target: "Person-QWQWQ",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "795",
      source: "CaseGroup-200519254130000000",
      target: "Person-照旧",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "764",
      source: "CaseGroup-200519254130000000",
      target: "Person-eee",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1162",
      source: "Clue-200426000860000005",
      target: "Person-2",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1165",
      source: "Clue-200527748700000000",
      target: "Person-bill",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1198",
      source: "Clue-200527270830000007",
      target: "Person-A",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1207",
      source: "Clue-200527270830000007",
      target: "Person-331023199610124777",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1003",
      source: "CaseGroup-200615162990000047",
      target: "Person-FE",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1195",
      source: "Clue-200527270830000007",
      target: "Person-ssssssss",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "895",
      source: "CaseGroup-200522940540000036",
      target: "Person-ssdd",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1250",
      source: "Clue-200618648270000020",
      target: "Person-B",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1238",
      source: "Clue-200529848480000091",
      target: "Person-AWSXR",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "865",
      source: "CaseGroup-200519613620000008",
      target: "Person-爪八",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "655",
      source: "CaseGroup-200409898050000007",
      target: "Person-77",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1233",
      source: "Clue-200522940540000013",
      target: "Person-33102319961012463x",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1192",
      source: "Clue-200527270830000007",
      target: "Person-2",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1098",
      source: "CaseGroup-200701658160000011",
      target: "Person-1",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "769",
      source: "CaseGroup-200519254130000000",
      target: "Person-qqq",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1104",
      source: "CaseGroup-200701658160000011",
      target: "Person-B",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "650",
      source: "CaseGroup-200408899980000016",
      target: "Person-qqq",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1143",
      source: "CaseGroup-200701658160000058",
      target: "Person-bill",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1208",
      source: "Clue-200527270830000007",
      target: "Person-331023199610124888",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "844",
      source: "CaseGroup-200519613620000008",
      target: "Person-EE",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "910",
      source: "CaseGroup-200522940540000036",
      target: "Person-eee",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "921",
      source: "CaseGroup-200522940540000036",
      target: "Person-张三丰123",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "663",
      source: "CaseGroup-200408899980000016",
      target: "Person-照旧",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "966",
      source: "CaseGroup-200602807460000012",
      target: "Person-张三丰123",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "728",
      source: "CaseGroup-200519254130000000",
      target: "Person-1",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "813",
      source: "CaseGroup-200519613620000008",
      target: "Person-xcxcxc",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "800",
      source: "CaseGroup-200519613620000008",
      target: "Person-1",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "952",
      source: "CaseGroup-200522940540000036",
      target: "Person-lucy2",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "726",
      source: "CaseGroup-200519254130000000",
      target: "Person-331023199610124637",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "657",
      source: "CaseGroup-200408899980000016",
      target: "Person-66",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "653",
      source: "CaseGroup-200409898050000007",
      target: "Person-66",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1005",
      source: "CaseGroup-200615162990000047",
      target: "Person-WEWE",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "849",
      source: "CaseGroup-200519613620000008",
      target: "Person-AWSXR",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "629",
      source: "CaseGroup-200409898050000007",
      target: "Person-331023199610124637",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "802",
      source: "CaseGroup-200519613620000008",
      target: "Person-4***83****10*****5",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1020",
      source: "CaseGroup-200615162990000047",
      target: "Person-123198199203241324",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "855",
      source: "CaseGroup-200519613620000008",
      target: "Person-小小",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "925",
      source: "CaseGroup-200522940540000036",
      target: "Person-210",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "625",
      source: "CaseGroup-200408899980000016",
      target: "Person-33102319961012463x",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1220",
      source: "Clue-200527270830000007",
      target: "Person-EE",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "829",
      source: "CaseGroup-200519613620000008",
      target: "Person-Q",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1221",
      source: "Clue-200527270830000007",
      target: "Person-Q",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1197",
      source: "Clue-200527270830000007",
      target: "Person-444444444444",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "759",
      source: "CaseGroup-200519254130000000",
      target: "Person-bill",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "701",
      source: "CaseGroup-200331171410000000",
      target: "Person-AWSXR",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1202",
      source: "Clue-200527270830000007",
      target: "Person-爪八",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1145",
      source: "Clue-200426000860000005",
      target: "Person-66",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1193",
      source: "Clue-200527270830000007",
      target: "Person-123198199203241324",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "719",
      source: "CaseGroup-200331171410000000",
      target: "Person-照旧",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "clue_person",
      relName: "线索关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1222",
      source: "Clue-200527270830000007",
      target: "Person-B",
      label: "线索关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "785",
      source: "CaseGroup-200519254130000000",
      target: "Person-123",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1118",
      source: "CaseGroup-200701658160000032",
      target: "Person-4***83****10*****5",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "876",
      source: "CaseGroup-200522940540000036",
      target: "Person-4***83****10*****5",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "905",
      source: "CaseGroup-200522940540000036",
      target: "Person-bill",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    },
    {
      relId: "casegroup_person",
      relName: "专案关系人",
      lineColor: null,
      lineWidth: null,
      lineType: null,
      direction: 1,
      isMulti: null,
      properties: null,
      uid: "1070",
      source: "CaseGroup-200618602030000000",
      target: "Person-SSS",
      label: "专案关系人",
      style: {
        lineWidth: 1,
        stroke: "#000",
        lineDash: "",
        endArrow: {
          path: "M 4,0 L -4,-4 L -4,4 Z",
          d: 4
        }
      }
    }
  ]
};